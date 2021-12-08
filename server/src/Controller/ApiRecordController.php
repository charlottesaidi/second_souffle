<?php

namespace App\Controller;

use App\Entity\Record;
use App\Repository\RecordRepository;
use App\Entity\Coordonnee;
use App\Repository\CoordonneeRepository;
use App\Entity\Ville;
use App\Repository\VilleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\ApiInsertGenerator;
use App\Service\ApiQueryGenerator;
use Doctrine\ORM\EntityManagerInterface;

#[Route('/api')]
class ApiRecordController extends AbstractController
{
    private $recordRepository;
    private $coordonneeRepository;
    private $villeRepository;
    private $insertGenerator;
    private $queryGenerator;
    private $entityManager;
    
    public function __construct(RecordRepository $recordRepository, CoordonneeRepository $coordonneeRepository, VilleRepository $villeRepository, ApiInsertGenerator $insertGenerator, ApiQueryGenerator $queryGenerator, EntityManagerInterface $entityManager)
    {
        $this->recordRepository = $recordRepository;
        $this->coordonneeRepository = $coordonneeRepository;
        $this->villeRepository = $villeRepository;
        $this->insertGenerator = $insertGenerator;
        $this->queryGenerator = $queryGenerator;
        $this->entityManager = $entityManager;
    }

    #[Route('/gouv/records', name: 'api_record_gouv', methods: ['GET'])]    
    /**
     * Method insertRecordsFromDataGouv [insertion des bennes à verres en bdd depuis api gouvernementale]
     *
     * @param Request $request
     *
     * @return Response
     */
    public function insertRecordsFromDataGouv(Request $request): Response {
        // ToDo : lancer la fonction automatiquement (tous les jours, toutes les semaines...)
        $response = new Response();
        $this->insertGenerator->recordsInsert(
            'GET',
            'https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=points-dapport-volontaire-dechets-et-moyens-techniques&q=&rows=20&facet=commune&facet=flux&facet=centre_ville&facet=prestataire&facet=zone&facet=pole&refine.commune=Toulouse',
            'recordid',
            'commune',
            'code_insee',
            'geo_point_2d',
            'voie',
            'numero',
            $response,
            Response::HTTP_OK, // si ça passe
            Response::HTTP_INTERNAL_SERVER_ERROR // si ça foire
        );
        
        if($response->getStatusCode(Response::HTTP_INTERNAL_SERVER_ERROR)) {
            $this->addFlash('error', $response->getContent());
        } else {
            $this->addFlash('success', $response->getContent());
        }
        
        return $this->redirectToRoute('admin');
    }

    #[Route('/records/count')]
    public function countRecord() {
        $response = new Response;
        $response->setContent($this->recordRepository->countElements());
        return $response;
    
    }

    #[Route('/records')]
    public function getRecords(Request $request) 
    {
        $response = new Response();
        $adresse = $request->query->get('adresse');
        $voie = $request->query->get('voie');
        $ville = $request->query->get('commune');
        
        if (!is_null($adresse) || !empty($adresse) || !is_null($voie) || !empty($voie)) { 
            $records = $this->recordRepository->findByAdresse($adresse, $voie);
        } elseif (is_null($adresse) || empty($adresse)) {
            $records = $this->recordRepository->findByVille($ville);
        } else { 
            $records = $this->recordRepository->findAll();
        }
        $jsonContent = $this->queryGenerator->handleCircularReference($records);
        $response->setStatusCode(Response::HTTP_OK);
        $response->setContent($jsonContent);

        return $response;
    }
    
    #[Route('/record/{id}', methods: ['GET'])] 
    public function show(Record $record) 
    {
        $response = new Response();
        if(is_null($record)) {
            $response->setContent('Element introuvable');
            $response->setStatusCode(Response::HTTP_NOT_FOUND);
        } else {
            $jsonContent = $this->queryGenerator->handleCircularReference($record);

            $response->setStatusCode(Response::HTTP_OK);
            $response->setContent($jsonContent);
        }
        return $response;
    }

    #[Route('/record/create', methods: ['POST'])] 
    public function create(Request $request) 
    {
        $data = $request->query->all();
        $response = new Response();

        if(empty($data['ville']) || empty($data['code_postal']) || empty($data['latitude']) || empty($data['longitude']) || empty($data['numero_benne']) || empty($data['adresse'])) {
            $response->setStatusCode(Response::HTTP_BAD_REQUEST);
            $response->setContent('Il manque des informations');
        } else {
            $this->queryGenerator->createRecord(
                $data['ville'],
                $data['code_postal'],
                $data['latitude'],
                $data['longitude'],
                $data['numero_benne'],
                $data['adresse'],
                $data['voie'],
            );
            $this->entityManager->flush();

            $response->setStatusCode(Response::HTTP_CREATED);
            $response->setContent('Element créé avec succès');
        }
        return $response;
    }

    #[Route('/record/{id}/delete', methods: ['DELETE'])]
    public function delete(Request $request, Record $record): Response
    {
        $response = new Response();
        if(is_null($record)) {
            $response->setContent('Element introuvable');
            $response->setStatusCode(Response::HTTP_NOT_FOUND);
        } else {
            $this->entityManager->remove($record);
            $this->entityManager->flush();

            $response->setStatusCode(Response::HTTP_OK);
            $response->setContent('Element supprimé avec succès');
        }
        return $response;
    }

    #[Route('/record/{id}/edit', methods: ['PUT'])]
    public function edit(Request $request, Record $record): Response
    {
        $data = $request->query->all();
        $coordonnee = $this->coordonneeRepository->find($record->getCoordonnee()->getId());
        $response = new Response();

        if(!empty($data['numero_benne'])) {
            $record->setNumeroBenne($data['numero_benne']);
        }
        if(!empty($data['adresse'])) {
            $record->setAdresse($data['adresse']);
        }
        if(!empty($data['code_postal'])) {
            $ville->setCodePostal($data['code_postal']);
        }
        if(!empty($data['ville'])) {
            $ville->setNom($data['ville']);
        }   
        if(!empty($data['latitude'])) {
            $coordonnee->setLatitude($data['latitude']);
        }  
        if(!empty($data['longitude'])) {
            $coordonnee->setLongitude($data['longitude']);
        }
        $this->entityManager->persist($record);
        $this->entityManager->flush();

        $response->setStatusCode(Response::HTTP_OK);
        $response->setContent('Element modifié avec succès');
        return $response;
    }
}

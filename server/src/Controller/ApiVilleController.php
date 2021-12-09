<?php

namespace App\Controller;

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
class ApiVilleController extends AbstractController
{
    private $villeRepository;
    private $insertGenerator;
    private $queryGenerator;
    private $entityManager;
    
    public function __construct(VilleRepository $villeRepository, ApiInsertGenerator $insertGenerator, EntityManagerInterface $entityManager, ApiQueryGenerator $queryGenerator)
    {
        $this->villeRepository = $villeRepository;
        $this->insertGenerator = $insertGenerator;
        $this->queryGenerator = $queryGenerator;
        $this->entityManager = $entityManager;
    }

    #[Route('/gouv/villes', name: 'api_ville_gouv', methods: ['GET', 'POST'])]    
    /**
     * Method insertCitiesFromDataGouv [insertion des communes en bdd depuis api gouvernementale]
     *
     * @param Request $request
     *
     * @return Response
     */
    public function insertCitiesFromDataGouv(Request $request): Response {
        $response = new Response();
        $url = $request->request->get('ville_url');

        $this->insertGenerator->citiesInsert(
            'GET',
            $url,
            'population',
            'nom',
            'code',
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
    
    #[Route('/villes', name:'api_villes')]
    public function getCities(Request $request) 
    {
        $response = new Response();
        $nom = $request->query->get('nom');
        $postalCode = $request->query->get('code_postal');
        
        if ($nom && $postalCode) { 
            $villes = $this->villeRepository->findByNameOrCode($nom, $postalCode);
        } elseif($nom) {
            $villes = $this->villeRepository->findByNameOrCode($nom, '');
        } elseif($postalCode) {
            $villes = $this->villeRepository->findByNameOrCode('', $postalCode);
        } else { 
            $villes = $this->villeRepository->findAll();
        }

        $jsonContent = $this->queryGenerator->handleCircularReference($villes);

        $response->setStatusCode(Response::HTTP_OK);
        $response->setContent($jsonContent);
        $response->headers->set('Access-Control-Allow-Origin', '*');

        return $response;
    }

    #[Route('/villes/count')]
    public function countRecord() {
        $response = new Response;
        $response->setContent($this->villeRepository->countElements());
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    
    }

    #[Route('/ville/{nom}', methods: ['GET'])] 
    public function show(Ville $ville) 
    {
        $response = new Response();
        if(is_null($ville)) {
            $response->setContent('Element introuvable');
            $response->setStatusCode(Response::HTTP_NOT_FOUND);
        } else {
            $jsonContent = $this->queryGenerator->handleCircularReference($ville);

            $response->setStatusCode(Response::HTTP_OK);
            $response->setContent($jsonContent);
        }
        $response->headers->set('Access-Control-Allow-Origin', '*');

        return $response;
    }

    #[Route('/ville/create', methods: ['POST'])] 
    public function create(Request $request) 
    {
        $data = $request->query->all();
        $response = new Response();

        if(empty($data['nom']) || empty($data['code_postal'])) {
            $response->setStatusCode(Response::HTTP_BAD_REQUEST);
            $response->setContent('Il manque des informations');
        } else {
            $this->queryGenerator->createVille(
                $data['nom'],
                $data['code_postal'],
            );
            $response->setStatusCode(Response::HTTP_CREATED);
            $response->setContent('Element créé avec succès');
            
            $this->entityManager->flush();
        }
        $response->headers->set('Access-Control-Allow-Origin', '*');

        return $response;
    }

    #[Route('/ville/{nom}/delete', methods: ['DELETE'])]
    public function delete(Request $request, Ville $ville): Response
    {
        $response = new Response();
        if(is_null($ville)) {
            $response->setContent('Element introuvable');
            $response->setStatusCode(Response::HTTP_NOT_FOUND);
        } else {
            $this->entityManager->remove($ville);
            $this->entityManager->flush();

            $response->setStatusCode(Response::HTTP_OK);
            $response->setContent('Element supprimé avec succès');
        }
        $response->headers->set('Access-Control-Allow-Origin', '*');

        return $response;
    }

    #[Route('/ville/{nom}/edit', methods: ['PUT'])]
    public function edit(Request $request, Ville $ville): Response
    {
        $data = $request->query->all();
        $response = new Response();

        if(!empty($data['nom'])) {
            $ville->setNom($data['nom']);
        }
        if(!empty($data['code_postal'])) {
            $ville->setCodePostal($data['code_postal']);
        }
        $this->entityManager->persist($ville);
        $this->entityManager->flush();

        $response->setStatusCode(Response::HTTP_OK);
        $response->setContent('Element modifié avec succès');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        return $response;
    }
}
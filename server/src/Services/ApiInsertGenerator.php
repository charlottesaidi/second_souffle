<?php

namespace App\Service;

use App\Entity\Record;
use App\Repository\RecordRepository;
use App\Entity\Ville;
use App\Repository\VilleRepository;
use App\Service\ApiQueryGenerator;
use Doctrine\ORM\EntityManagerInterface;

class ApiInsertGenerator 
{
    private $villeRepository;
    private $recordRepository;
    private $entityManager;
    private $queryGenerator;
    
    public function __construct(RecordRepository $recordRepository, VilleRepository $villeRepository, EntityManagerInterface $entityManager, ApiQueryGenerator $queryGenerator)
    {
        $this->villeRepository = $villeRepository;
        $this->recordRepository = $recordRepository;
        $this->entityManager = $entityManager;
        $this->queryGenerator = $queryGenerator;
    }   

    public function citiesInsert($method, $url, $pop, $nom, $code, $response, $statusCode, $errorCode) 
    {
        $content = $this->queryGenerator->externalRequest($method, $url);
        $nbrCreated = 0;
        $inserted = [];
        foreach($content as $item) {
            if(array_key_exists($pop, $item)) {
                if($item[$pop] >= '100000') {
                    array_push($inserted, $item);
                }
            }
        }
        foreach ($inserted as $item) {
            if(!array_key_exists($nom, $item) || !array_key_exists($code, $item) || is_null($item[$nom]) || is_null($item[$code])) {
                $response->setStatusCode($errorCode);
                $response->setContent('La base de donnée n\'a renvoyé aucun résultat');
            } else {
                $existingVille = $this->villeRepository->findOneBy([
                    'nom' => $item[$nom],
                    'code_postal' => $item[$code]
                ]);
                if(empty($existingVille)) {
                    $this->queryGenerator->createVille(
                        $item[$nom],
                        $item[$code]
                    );
                    $nbrCreated = count($inserted);
                }       
                $response->setStatusCode($statusCode);
                $response->setContent($nbrCreated.' éléments insérés');
            }     
        } 
        $this->entityManager->flush();
    }

    public function recordsInsert($method, $url, $recordId, $recordCity, $recordPostalCode, $recordCoordinate, $recordVoie, $recordNumeroVoie, $response, $statusCode, $errorCode) 
    {
        $raw = $this->queryGenerator->externalRequest($method, $url);
        $content = $raw['records'];
        $nbrCreated = 0;

        foreach ($content as $item) { 
            if(!array_key_exists($recordId, $item) || !array_key_exists($recordCity, $item['fields']) || !array_key_exists($recordPostalCode, $item['fields']) || !array_key_exists($recordCoordinate, $item['fields']) || !array_key_exists($recordVoie, $item['fields']) || !array_key_exists($recordNumeroVoie, $item['fields']) || is_null($item[$recordId]) || is_null($item['fields'][$recordCity]) || is_null($item['fields'][$recordPostalCode]) || is_null($item['fields'][$recordVoie]) || is_null($item['fields'][$recordCoordinate]) || is_null($item['fields'][$recordVoie])|| is_null($item['fields'][$recordNumeroVoie])) {
                $response->setStatusCode($errorCode);
                $response->setContent('La base de donnée n\'a renvoyé aucun résultat');
            } else {
                $existingRecord = $this->recordRepository->findOneBy([
                    'numero_benne' => $item[$recordId],
                ]);
                if(empty($existingRecord) || is_null($existingRecord)) {
                    $this->queryGenerator->createRecord(
                        $item['fields'][$recordCity],
                        $item['fields'][$recordPostalCode],
                        $item['fields'][$recordCoordinate][0],
                        $item['fields'][$recordCoordinate][1],
                        $item[$recordId],
                        $item['fields'][$recordVoie],
                        $item['fields'][$recordNumeroVoie],
                    );
                    $nbrCreated = count($content);
                } else {
                    $coordonnee = $existingRecord->getCoordonnee();
                    $apiRecords = array_column($content, $recordId);
                    if(!in_array($existingRecord->getNumeroBenne(), $apiRecords)) { // vérifier si elle a été supprimée
                        $this->entityManager->remove($existingRecord);
                    } else { 
                        // vérifier si elle a été modifiée 
                        if($coordonnee->getLatitude() !== $item['fields'][$recordCoordinate][0]) {
                            $coordonnee->setLatitude($item['fields'][$recordCoordinate][0]);
                        } 
                        if($coordonnee->getLongitude() != $item['fields'][$recordCoordinate][1]) {
                            $coordonnee->setLongitude($item['fields'][$recordCoordinate][1]);
                        }
                    }
                }
                $response->setStatusCode($statusCode);
                $response->setContent($nbrCreated.' éléments insérés');
            }
        }
        $this->entityManager->flush();
    }
}

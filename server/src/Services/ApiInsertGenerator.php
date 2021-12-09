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
        $keys = [$nom, $code];

        foreach($content as $item) {
            if(array_key_exists($pop, $item)) {
                if($item[$pop] >= '100000') {
                    array_push($inserted, $item);
                }
            }
        }
        foreach ($inserted as $item) {
            if($this->keyAbsentFromJson($item, $keys)) {
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
        $keys = [$recordCity, $recordPostalCode, $recordCoordinate, $recordVoie, $recordNumeroVoie];

        foreach ($content as $item) { 
            if($this->keyAbsentFromJson($item, [$recordId]) || $this->keyAbsentFromJson($item['fields'], $keys)) {
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

    public function keyAbsentFromJson($array, array $keys) 
    {
        foreach($keys as $item) {
            if(!array_key_exists($item, $array) || is_null($array[$item])) {
                return true;
            }
        }
    }
}
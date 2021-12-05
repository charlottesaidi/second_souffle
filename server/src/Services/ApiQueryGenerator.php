<?php

namespace App\Service;

use App\Entity\Record;
use App\Entity\Coordonnee;
use App\Entity\Ville;
use App\Repository\VilleRepository;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class ApiQueryGenerator 
{
    private $villeRepository;
    private $entityManager;
    private $client;
    
    public function __construct(VilleRepository $villeRepository, EntityManagerInterface $entityManager, HttpClientInterface $client)
    {
        $this->villeRepository = $villeRepository;
        $this->entityManager = $entityManager;
        $this->client = $client;
    }   

    /**
     * Method handleCircularReference [transformation d'un objet en Json avec gestion de boucle infinie en cas de relations]
     *
     * @param $data [objet concerné passé en paramètre pour la manipulation]
     *
     * @return mixed
     */
    public function handleCircularReference($data) {
        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);

        $serializer = new Serializer([$normalizer], [$encoder]);

        return $serializer->serialize($data, 'json');
    }
    
    /**
     * Method createRecord [création d'un objet "record". Ses attributs(champs) sont injectés en paramètres]
     *
     * @param $nomVille 
     * @param $codeVille 
     * @param $lat 
     * @param $long 
     * @param $numero 
     * @param $adresse 
     *
     * @return void
     */
    public function createRecord($nomVille, $codeVille, $lat, $long, $numero, $adresse, $voie) {
        $ville = $this->villeRepository->findOneBy([
           'nom' => $nomVille,
           'code_postal' => $codeVille
        ]);
        $coordonnee = new Coordonnee();
        $coordonnee->setLatitude($lat)
            ->setLongitude($long);
        $this->entityManager->persist($coordonnee);

        $record = new Record();
        $record->setNumeroBenne($numero)
            ->setAdresse($adresse)
            ->setVoie($voie)
            ->setVille($ville)
            ->setCoordonnee($coordonnee);
        $this->entityManager->persist($record);

    }
    
    /**
     * Method createVille [création d'un objet "record". Ses attributs(champs) sont injectés en paramètres]
     *
     * @param $nom
     * @param $code
     *
     * @return void
     */
    public function createVille($nom, $code) {
        
        $ville = new Ville();
        $ville->setNom($nom)
            ->setCodePostal($code);
        $this->entityManager->persist($ville);
    }
    
    /**
     * Method externalRequest [requête à une api extérieure avec le composant HttpClient]
     *
     * @param $method [la méthode de la requête http(GET, POST... etc)]
     * @param $url [adresse de l'api externe à appeler]
     *
     * @return mixed
     */
    public function externalRequest($method, $url) {
        $data = $this->client->request(
            $method,
            $url
        );

        return json_decode($data->getContent(), associative: true);
    }
}
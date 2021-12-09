<?php

namespace App\Repository;

use App\Entity\Record;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Record|null find($id, $lockMode = null, $lockVersion = null)
 * @method Record|null findOneBy(array $criteria, array $orderBy = null)
 * @method Record[]    findAll()
 * @method Record[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RecordRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Record::class);
    }

    public function findByAdresse($adresse, $voie)
    {
        return $this->createQueryBuilder('r')
            ->select('r, c')
            ->leftJoin('r.coordonnee', 'c')
            ->andWhere('r.adresse LIKE :adresse')
            ->andWhere('r.voie LIKE :voie')
            ->setParameters(['adresse' => '%'.$adresse.'%', 'voie' => '%'.$voie.'%'])
            ->getQuery()
            ->getArrayResult()
        ;
    }
    
    public function findByVille($ville)
    {
        return $this->createQueryBuilder('r')
            ->select('r, c, v')
            ->leftJoin('r.coordonnee', 'c')
            ->leftJoin('r.ville', 'v')
            ->andWhere('v.nom LIKE :ville')
            ->setParameter('ville', '%'.$ville.'%')
            ->getQuery()
            ->getArrayResult()
        ;
    }

    public function countElements() {
        return $this->createQueryBuilder('r')
            ->select('count(r.id)')
            ->getQuery()
            ->getSingleScalarResult();
    }
    
    // /**
    //  * @return Record[] Returns an array of Record objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Record
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

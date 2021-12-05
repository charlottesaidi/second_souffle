<?php

namespace App\Repository;

use App\Entity\Ville;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Ville|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ville|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ville[]    findAll()
 * @method Ville[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VilleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Ville::class);
    }

    public function findByNameOrCode($name, $code)
    {
        $query = $this->createQueryBuilder('v')
            ->select('v, r')
            ->leftJoin('v.records', 'r');

        if($name) {
            $query->andWhere('v.nom LIKE :nom')
            ->setParameter('nom', '%'.$name.'%');
        } 
        if($code) {
            $query->andWhere('v.code_postal LIKE :code')
            ->setParameter('code', '%'.$code.'%');
        } 
        if($name && $code) {
            $query->andWhere('v.nom LIKE :nom')
            ->andWhere('v.code_postal LIKE :code')
            ->setParameters(['nom' => '%'.$name.'%', 'code' => '%'.$code.'%']);
        }

        return $query->getQuery()
            ->getArrayResult();
    }

    // /**
    //  * @return Ville[] Returns an array of Ville objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('v.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Ville
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

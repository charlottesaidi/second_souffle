<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private $passwordHasher;

    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    public function load(ObjectManager $manager)
    {
        $admin1 = new User();
        $admin1->setEmail('charlotte.saidi@secondsouffle.fr')
            ->setPassword($this->passwordHasher->hashPassword(
                $admin1,
                'azerty456'
            ))
            ->setRoles(['ROLE_ADMIN']);
        $manager->persist($admin1);
        
        $admin2 = new User();
        $admin2->setEmail('jeremy.baudrin@secondsouffle.fr')
            ->setPassword($this->passwordHasher->hashPassword(
                $admin2,
                'azerty258'
            ))
            ->setRoles(['ROLE_ADMIN']);
        $manager->persist($admin2);
        
        $admin3 = new User();
        $admin3->setEmail('quentin.vannarath@secondsouffle.fr')
            ->setPassword($this->passwordHasher->hashPassword(
                $admin3,
                'azerty147'
            ))
            ->setRoles(['ROLE_ADMIN']);
        $manager->persist($admin3);
        
        $admin4 = new User();
        $admin4->setEmail('lucas.barcq@secondsouffle.fr')
            ->setPassword($this->passwordHasher->hashPassword(
                $admin1,
                'azerty369'
            ))
            ->setRoles(['ROLE_ADMIN']);
        $manager->persist($admin4);

        $manager->flush();
    }
}

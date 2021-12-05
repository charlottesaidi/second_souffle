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
                'Wxcvbn2020!'
            ))
            ->setRoles(['ROLE_ADMIN']);
        $manager->persist($admin1);

        $manager->flush();
    }
}

<?php

namespace App\Controller\Admin;

use App\Entity\Record;
use App\Entity\Ville;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        return $this->render('admin/dashboard.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Administration');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linktoDashboard('Api Gouv', 'fas fa-wifi');
        yield MenuItem::linkToCrud('Bennes à verres', 'fas fa-dumpster', Record::class);
        yield MenuItem::linkToCrud('Communes', 'fas fa-city', Ville::class);
        yield MenuItem::linkToCrud('Administrateurs', 'fas fa-users', User::class);
    }
}

<?php

namespace App\Controller\Admin;

use App\Entity\Record;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;

class RecordCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Record::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('numero_benne', 'Numéro'),
            IntegerField::new('voie', 'Voie'),
            TextField::new('adresse', 'Adresse'),
            AssociationField::new('ville', 'Commune'),
            AssociationField::new('coordonnee', 'Coordonnées'),
            DateTimeField::new('created_at', 'Date d\'insertion'),
            DateTimeField::new('updated_at', 'Dernière modification'),
        ];
    }
}

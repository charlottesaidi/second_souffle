<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211008215110 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE coordonnee (id INT AUTO_INCREMENT NOT NULL, latitude DOUBLE PRECISION NOT NULL, longitude DOUBLE PRECISION NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE record (id INT AUTO_INCREMENT NOT NULL, coordonnee_id INT DEFAULT NULL, ville_id INT DEFAULT NULL, adresse VARCHAR(255) NOT NULL, voie VARCHAR(255) NOT NULL, numero_benne VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, UNIQUE INDEX UNIQ_9B349F91F202EC33 (coordonnee_id), INDEX IDX_9B349F91A73F0036 (ville_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ville (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, code_postal VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE record ADD CONSTRAINT FK_9B349F91F202EC33 FOREIGN KEY (coordonnee_id) REFERENCES coordonnee (id)');
        $this->addSql('ALTER TABLE record ADD CONSTRAINT FK_9B349F91A73F0036 FOREIGN KEY (ville_id) REFERENCES ville (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE record DROP FOREIGN KEY FK_9B349F91F202EC33');
        $this->addSql('ALTER TABLE record DROP FOREIGN KEY FK_9B349F91A73F0036');
        $this->addSql('DROP TABLE coordonnee');
        $this->addSql('DROP TABLE record');
        $this->addSql('DROP TABLE ville');
    }
}

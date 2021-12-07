<?php

namespace App\Entity;

use App\Repository\CoordonneeRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=CoordonneeRepository::class)
 */
class Coordonnee
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Assert\NotBlank
     * @ORM\Column(type="float")
     */
    private $latitude;

    /**
     * @Assert\NotBlank
     * @ORM\Column(type="float")
     */
    private $longitude;

    /**
     * @ORM\OneToOne(targetEntity=Record::class, mappedBy="coordonnee", cascade={"persist", "remove"})
     */
    private $record;

    public function __toString() {
        return 'latitude : ' .$this->latitude. ' longitude : ' .$this->longitude;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLatitude(): ?float
    {
        return $this->latitude;
    }

    public function setLatitude(float $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getLongitude(): ?float
    {
        return $this->longitude;
    }

    public function setLongitude(float $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getRecord(): ?Record
    {
        return $this->record;
    }

    public function setRecord(?Record $record): self
    {
        // unset the owning side of the relation if necessary
        if ($record === null && $this->record !== null) {
            $this->record->setCoordonnee(null);
        }

        // set the owning side of the relation if necessary
        if ($record !== null && $record->getCoordonnee() !== $this) {
            $record->setCoordonnee($this);
        }

        $this->record = $record;

        return $this;
    }
}

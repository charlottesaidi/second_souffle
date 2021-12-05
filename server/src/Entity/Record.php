<?php

namespace App\Entity;

use App\Repository\RecordRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=RecordRepository::class)
 */
class Record
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Assert\NotBlank
     * @ORM\Column(type="string", length=255)
     */
    private $adresse;

    /**
     * @Assert\NotBlank
     * @Assert\Regex(
     *     pattern="/^[0-9]+$/",
     *     message="Veuillez entrer uniquement des chiffres"
     * )
     * @ORM\Column(type="string", length=255)
     */
    private $voie;

    /**
     * @Assert\NotBlank
     * @ORM\Column(type="string")
     */
    private $numero_benne;

    /**
     * @ORM\OneToOne(targetEntity=Coordonnee::class, inversedBy="record", cascade={"persist", "remove"})
     */
    private $coordonnee;

    /**
     * @ORM\ManyToOne(targetEntity=Ville::class, inversedBy="records")
     */
    private $ville;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated_at;

    public function __construct()
    {
        $this->created_at = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getVoie(): ?string
    {
        return $this->voie;
    }

    public function setVoie(string $voie): self
    {
        $this->voie = $voie;

        return $this;
    }

    public function getNumeroBenne(): ?string
    {
        return $this->numero_benne;
    }

    public function setNumeroBenne(string $numero_benne): self
    {
        $this->numero_benne = $numero_benne;

        return $this;
    }

    public function getCoordonnee(): ?Coordonnee
    {
        return $this->coordonnee;
    }

    public function setCoordonnee(?Coordonnee $coordonnee): self
    {
        $this->coordonnee = $coordonnee;

        return $this;
    }

    public function getVille(): ?Ville
    {
        return $this->ville;
    }

    public function setVille(?Ville $ville): self
    {
        $this->ville = $ville;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(?\DateTimeInterface $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }
}

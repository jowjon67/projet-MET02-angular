<?php
// src/Client.php

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="client")
 */

 class Client
 {
     /**
      * @ORM\Id
      * @ORM\Column(type="integer")
      * @ORM\GeneratedValue
      */
     protected $id;
     /**
      * @ORM\Column(type="string")
      */
     protected $nom;
     /**
      * @ORM\Column(type="string")
      */
     protected $prenom;
     /**
      * @ORM\Column(type="string")
      */
     protected $email;
     /**
      * @ORM\Column(type="string")
      */
     protected $motDePasse;


     public function getId()
    {
        return $this->id;
    }

    public function getNom()
    {
        return $this->nom;
    }
    public function setNom($nom)
    {
        $this->nom = $nom;
    }

    public function getPrenom()
    {
        return $this->prenom;
    }
    public function setPrenom($prenom)
    {
        $this->prenom = $prenom;
    }

    public function getEmail()
    {
        return $this->email;
    }
    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function getMotDePasse()
    {
        return $this->motDePasse;
    }
    public function setMotDePasse($motDePasse)
    {
        $this->motDePasse = $motDePasse;
    }
 }
?>

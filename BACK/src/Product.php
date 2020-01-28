<?php
// src/Product.php

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="products")
 */

 class Product
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
     protected $name;
     /**
      * @ORM\Column(type="string")
      */
     protected $prixEuro;
     /**
      * @ORM\Column(type="string")
      */
     protected $prixDollars;
     /**
      * @ORM\Column(type="string")
      */
     protected $categorie;
     /**
      * @ORM\Column(type="string")
      */
     protected $image;
     /**
      * @ORM\Column(type="string", length=1500)
      */
     protected $description;


     public function getId()
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->name;
    }
    public function setName($name)
    {
        $this->name = $name;
    }

    public function getPrixEuro()
    {
        return $this->prixEuro;
    }
    public function setPrixEuro($prixEuro)
    {
        $this->prixEuro = $prixEuro;
    }

    public function getPrixDollars()
    {
        return $this->prixDollars;
    }
    public function setPrixDollars($prixDollars)
    {
        $this->prixDollars = $prixDollars;
    }

    public function getCategorie()
    {
        return $this->categorie;
    }
    public function setCategorie($categorie)
    {
        $this->categorie = $categorie;
    }

    public function getImage()
    {
        return $this->image;
    }
    public function setImage($image)
    {
        $this->image = $image;
    }

    public function getDescription()
    {
        return $this->description;
    }
    public function setDescription($description)
    {
        $this->description = $description;
    }
 }
?>

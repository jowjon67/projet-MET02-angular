<?php
// list_products.php
require_once "bootstrap.php";

$productRepository = $entityManager->getRepository('Product');
$products = $productRepository->findAll();

$tab = array();
foreach ($products as $product) {
   $tab[] = array("id"  => $product->getId(),
                  "nom" => $product->getName(),
                  "prixEuro" => $product->getPrixEuro(),
                  "prixDollars" => $product->getPrixDollars(),
                  "categorie" => $product->getCategorie(),
                  "image" => $product->getImage(),
                  "description" => $product->getDescription()
                );
}
    echo (json_encode($tab));
?>

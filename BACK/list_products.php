<?php
// list_products.php
require_once "bootstrap.php";

$productRepository = $entityManager->getRepository('Product');
$products = $productRepository->findAll();

$tab = array();
foreach ($products as $product) {
   $tab[] = array("id"  => $product->getId(),
                  "name" => $product->getName(),
                  "prixEuro" => $product->getPrixEuro(),
                  "prixDollars" => $product->getPrixDollars(),
                  "categorie" => $product->getCategorie(),
                  "image" => $product->getImage()
                );
}
    echo (json_encode($tab));
?>

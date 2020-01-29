<?php
// create_product.php <name>
require_once "bootstrap.php";
header( 'content-type: text/html; charset=utf-8' );
$newProductName = $argv[1];
$prixEuro = $argv[2];
$prixDollars = $argv[3];
$categorie = $argv[4];
$image = $argv[5];
$description = $argv[6];

$product = new Product();
$product->setName($newProductName);
$product->setPrixEuro($prixEuro);
$product->setPrixDollars($prixDollars);
$product->setCategorie($categorie);
$product->setImage($image);
$product->setDescription($description);

$entityManager->persist($product);
$entityManager->flush();

echo "Created Product with ID " . $product->getId() . "\n";
?>

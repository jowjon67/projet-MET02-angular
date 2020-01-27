<?php
// update_product.php <id> <new-name>
require_once "bootstrap.php";

$productRepository = $entityManager->getRepository('Product');
$products = $productRepository->findAll();

foreach ($products as $product) {
   echo sprintf("-%s deleted \n", $product->getId());
    $entityManager->remove($product);
    $entityManager->flush($product);
}

?>

<?php
// update_product.php <id> <new-name>
require_once "bootstrap.php";

$clientRepository = $entityManager->getRepository('Client');
$clients = $clientRepository->findAll();

foreach ($clients as $client) {
   echo sprintf("-%s deleted \n", $client->getId());
    $entityManager->remove($client);
    $entityManager->flush($client);
}

?>

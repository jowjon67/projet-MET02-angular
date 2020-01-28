<?php
// list_client.php
require_once "bootstrap.php";

$clientRepository = $entityManager->getRepository('Client');
$clients = $clientRepository->findAll();

$tab = array();
foreach ($clients as $client) {
   $tab[] = array("id"  => $client->getId(),
                  "nom" => $client->getNom(),
                  "prenom" => $client->getPrenom(),
                  "email" => $client->getEmail(),
                  "motDePasse" => $client->getMotDePasse()
                );
}
    echo (json_encode($tab));
?>

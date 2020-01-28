<?php
// show_product.php <id>
require_once "bootstrap.php";

$id = $_GET['id'];
$client = $entityManager->find('Client', $id);

if ($client === null) {
    echo "No Client found.\n";
    exit(1);
}

$tab = array();

   $tab = array("id"  => $client->getId(),
                  "nom" => $client->getNom(),
                  "prenom" => $client->getPrenom(),
                  "email" => $client->getEmail(),
                  "motDePasse" => $client->getMotDePasse()
                );

    echo (json_encode($tab));



?>

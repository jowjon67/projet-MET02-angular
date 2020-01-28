<?php
// create_client.php <name>
require_once "bootstrap.php";

header( 'content-type: text/html; charset=utf-8' );

$body = $request->getParsedBody();
$nom = $body["nom"];
$prenom = $body["prenom"];
$email = $body["email"];
$motDePasse = $body["motDePasse"];

$client = new Client();
$client->setNom($nom);
$client->setPrenom($prenom);
$client->setEmail($email);
$client->setMotDePasse($motDePasse);


$entityManager->persist($client);
$entityManager->flush();


?>

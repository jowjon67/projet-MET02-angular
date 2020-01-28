<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require '../vendor/autoload.php';
use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: HEAD,POST,GET,PUT,PATCH,DELETE");

const JWT_SECRET = "makey1234567";

$jwt = new \Slim\Middleware\JwtAuthentication([
"path" => "/api",
"secure" => false,
"secret" => JWT_SECRET,
"passthrough" => ["/login"],
"attribute" => "decoded_token_data",
"algorithm" => ["HS256"]
]);

// Launch API
$app = new \Slim\App;
$app->add($jwt);
$app->get('/productsOld', 'getProductsOld');
$app->get('/api/products', 'getProducts');
$app->post('/auth', 'login');
$app->post('/signup', 'signup');
$app->get('/info', 'getInfoUser');

$app->run();


// /products route
function getProductsOld($request, $response, $args)
{
    if (isset($args['id']))
    {
        $id = $args['id'];
        $mock = file_get_contents("data.json");
        return $response->write($mock);
    }
    $mock = file_get_contents("data.json");
    return $response->withHeader("Content-Type", "application/json")
        ->write($mock);
}
function getProducts($request, $response, $args)
{
    include "list_products.php";
}

function login ($request, $response, $args)
{
    require_once "bootstrap.php";

  $body = $request->getParsedBody();
  $nom = $body["email"];
  $prenom = $body["password"];

  $clientRepository = $entityManager->getRepository('Client');
  $clients = $clientRepository->findAll();

  $tab = array();
  $isAuth=0;
  foreach ($clients as $client)
  {
    if( $body["email"] == $client->getEmail() && $body["password"] == $client->getMotDePasse())
    {
      $isAuth=1;
    }

  }
  if($isAuth==1)
  {
    $issuedAt = time();
    $expirationTime = $issuedAt + 6969; // jwt valid for 60 seconds from the issued time
    $payload = array(
    'userid' => $client->getId(),
    'iat' => $issuedAt,
    'exp' => $expirationTime
    );
    $token_jwt = JWT::encode($payload,JWT_SECRET, "HS256");

    $response = $response->withHeader("Content-Type", "application/json");

    $data = array('id' => $client->getId(), 'token' => $token_jwt);
    return $response->withHeader("Content-Type", "application/json")->withJson($data);
  }
  else
  {
    $data = array('id' => '0', 'token' => '0');
    return $response->withHeader("Content-Type", "application/json")->withJson($data);
  }
}

  function getInfoUser($request, $response, $args)
  {
    include "show_client.php";
    /*
    require_once "bootstrap.php";


    $id = $_GET['id'];

    $client = $entityManager->find('Client', $id);

    if ($client === null) {
        echo "No Client found.\n";
        exit(1);
    }
      return $response->withHeader("Content-Type", "application/json")->withJson($client);
*/
  }


  function signup($request, $response, $args)
  {
    include "create_client.php";
  }



?>

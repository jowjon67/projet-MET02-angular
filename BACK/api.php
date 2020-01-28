<?php

/*
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: HEAD,POST,GET,PUT,PATCH,DELETE");
*/

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require '../vendor/autoload.php';
use \Firebase\JWT\JWT;

// Launch API
$app = new \Slim\App;
$app->get('/products', 'getProducts');
$app->post('/auth', 'postLogin');
$app->post('/signup', 'postSignup');
$app->add($jwt);
$app->run();




const JWT_SECRET = "BlahBlahtrycatchhh";
$jwt = new \Slim\Middleware\JwtAuthentication([
    "secure" => false,
    "path" => ["/secure"],
    "secret" => JWT_SECRET,
    "attribute" => "decoded_token_data",
    "algorithm" => ["HS256"],
    "error" => function ($response, $arguments)
    {
        $data = array(
            'ERROR' => 'Could not authenticate user.'
        );
        return $response->withHeader("Content-Type", "application/json")
            ->getBody()
            ->write(json_encode($data));
    }
]);

// /products route
function getProducts($request, $response, $args)
{
    $mock = file_get_contents("data.json");
    return $response->withHeader("Content-Type", "application/json")->write($mock);
}



?>

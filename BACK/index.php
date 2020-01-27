<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require '../vendor/autoload.php';
use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: HEAD,POST,GET,PUT,PATCH,DELETE");



// /products route
function getProducts($request, $response, $args)
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

// /auth route
function postLogin($request, $response, $args)
{
    $auth = $request->getHeader("Authorization");
    if (isset($auth) && count($auth) == 1)
    {
        // getting user:password from Basic credentials
        $auth_array = explode(" ", $auth[0]);
        if ($auth_array[0] == "Basic")
        {
            $un_pw = explode(":", base64_decode($auth_array[1]));
            if (isset($un_pw[0]) && isset($un_pw[1]))
            {
                $un = $un_pw[0];
                $pw = $un_pw[1];
                // TODO check user identity

                // return JWT Token
                $issuedAt = time();
                $expirationTime = $issuedAt + 3600 * 24 * 1; // jwt valid for 60 seconds from the issued time
                $payload = array(
                    'userid' => $un,
                    'iat' => $issuedAt,
                    'exp' => $expirationTime
                );
                $token_jwt = JWT::encode($payload, JWT_SECRET, "HS256");
                $data = array(
                    'token' => $token_jwt
                );
                return $response->withHeader("Content-Type", "application/json")
                    ->withJson($data)->withStatus(200);
            }
        }
    }
    return $response->withStatus(401);
}

// /signup route
function postSignup($request, $response, $args)
{
    $isOK = true;
    $response->withStatus(412);
    $data = array(
        'errors' => array()
    );
    $params = $request->getParsedBody();
    if (!isset($params['login']))
    {
        $isOK = false;
        array_push($data['errors'], "login missing.");
    }
    if (!isset($params['password']))
    {
        $isOK = false;
        array_push($data['errors'], "password missing.");
    }
    if (!isset($params['passwordConfirmation']))
    {
        $isOK = false;
        array_push($data['errors'], "passwordConfirmation missing.");
    }
    if (isset($params['passwordConfirmation']) && isset($params['password']) && $params['passwordConfirmation'] != $params['password'])
    {
        $isOK = false;
        array_push($data['errors'], "password mismatch.");
    }
    if (!isset($params['email']))
    {
        $isOK = false;
        array_push($data['errors'], "email missing.");
    }
    else
    {
        preg_match('/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}/', $params['email'], $matches);
        if (count($matches) != 1)
        {
            $isOK = false;
            array_push($data['errors'], "wrong email.");
        }
    }
    if ($isOK)
    {
        // TODO Create user
        $response->withStatus(201);
    }
    return $response
        ->withHeader("Content-Type", "application/json")
        ->withJson($data);
}

// Launch API
$app = new \Slim\App;
$app->get('/products', 'getProducts');
$app->post('/auth', 'postLogin');
$app->post('/signup', 'postSignup');
$app->run();
?>

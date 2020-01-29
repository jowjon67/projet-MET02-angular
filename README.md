------------------------------ TP 05 ---------------------------------------------------------------------------------------

J'ai du passé au moins 20h sur ce TP sans blagué j'ai même passé la nuit de l'info à essayer de faire quelque chose. 
J'ai réussi à lié mon front avec mon back pour les articles, proxy, slim etc... (j'arrive à afficher mes articles en récupérant les données via le php)
mais les posts ne fonctionnent pas, j'ai essayé plein de choses différentes, je me suis fait aidé mais la c'est l'abandon).

Fonctionnalités implémentées
- Créer les API REST utilisées par votre application Angular
- Développer le contrôleur de votre site de E-Commerce
- Créer un jeton JWT pour authentifier l’utilisateur dans les échanges avec le BACKEND (presque réussi à un moment mais à la fin plus rien
ne fonctionnait)

J'aimerais bien avoir un corrigé pour parcourrir le code finalisé et juste, c'est comme ça que j'apprends le mieux.

Je me doutes que je n'aurais pas une bonne note mais j'espère que ça compensera avec les autres notes que j'ai eu.

Lien code nvy:
https://codenvy.io/dashboard/#/ide/ehrhardjonathan/serveurPHP

Lien stackblitz:
https://stackblitz.com/edit/angular-8jpbpb



------------------------------ TP 06 et PROJET SITE MARCHAND ---------------------------------------------------------------------------------------

- La page d’accueil  -------------------> IMPLEMENTER
– La gestion du compte client ----------> IMPLEMENTER, on peut s'enregistrer, les infos sont stockées en base à l'aide de DOCTRINE. Le login verifie la correspondance motDePasse Login, si c'est ok le back renvoie le token. Si un utilisateur est logger il peut 
modifier ses informations personnel (nom/prenom/mot de passe etc...)
– Le catalogue -------------------------> IMPLEMENTER, j'ai bloqué l'accès à cette page si l'utilisateur n'est pas logger. C'est pas forcément utile mais je voulais tester la validité du token et vu que cela fonctionne bien je l'ai laisser, tant qu'on est pas 
logger on accède pas aux différents articles
– La recherche -------------------------> IMPLEMENTER, j'ai créer un component ArticleFilter qui permet de vérifier à l'aide d'une pipe
– Le panier / Le paiement --------------> Panier implémenté avec l'architecture NgRx. Paiement vide le panier

Lien repo GITHUB: https://github.com/jowjon67/projet-MET02-angular.git


Installation

BACKEND
1- WAMP ------------> http://www.wampserver.com/#download-wrapper
2- Prendre les fichiers de mon back et les placer dans le répertoire www (si vous êtes sur windows) lancer la commande composer update.
Composer:
{
    "require": {
        "slim/slim": "^3.0",
        "firebase/php-jwt": "^5.0",
        "tuupola/slim-jwt-auth": "^2.4",
        "doctrine/orm": "2.5"
    },
    "autoload": {
        "psr-0": {"": "src/"}
    }
}

3- 

D'après moi la base de données sera toujours remplis dans le fichier db_sqllite mais au cas-ou je vous donne les commandes
Script pour manipuler la base
Supprime tous les produits -------------------> php delete_product.php    
Supprime tous les clients --------------------> php delete_client.php   
Affiche la liste des clients -----------------> php list_client.php    
Affiche la liste des produits ----------------> php list_products.php    

Création de produits
php create_product.php "Le salut de Kobe" "40" "60" "gifun" "https://www.cjoint.com/doc/20_01/JADmo0B6PiD_kobe-bryant-2.gif" "Ce GIF represente Kobe dans toutes sa splandeur"
php create_product.php "Kobe happy" "100" "120" "gifun" "https://www.cjoint.com/doc/20_01/JADiVUE2bnG_kobe-bryant-1.gif" "Ce GIF represente Kobe dans sa bonne humeur"
php create_product.php "ShowMan Kobe" "50" "70" "gifSerious" "https://www.cjoint.com/doc/20_01/JADmpjwexaD_kobe-bryant-3.gif" "Ce GIF represente le show man qu'etais Kobe"
php create_product.php "Kobe l'intouchable" "40" "55" "gifun" "https://www.cjoint.com/doc/20_01/JADmp4mpNmD_kobe-bryant5.gif" "Ce GIF represente magnifiquement Kobe"

Création de clients
Les données clientes peuvent être inserer via le formulaire "inscription"

FRONT 
1- installation de l'environnement NPM
2- Amusez vous avec ma merveilleuse application




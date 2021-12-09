# Second Souffle  

#### Nouvelle entité : User + système d'authentification  

Création bdd si besoin :  
```bash
Symfony console doctrine:database:create
```
Migration :  
```bash
Symfony console doctrine:migration:migrate
```  
Fixtures pour vos identifiants :  
```bash
Symfony console doctrine:fixture:load
```  
#### Connexion admin  
Serveur :  
```bash
Symfony server:start
```  
Connexion : http://127.0.0.1:8000, redirection sur ^/admin  

## Outils
- Back et endpoints api : Symfony 5.3
- Front : Next 11.1.2, React 17.0.2
- APIs externes :  
[Data.Toulouse-métropole : Points d'Apport Volontaire - Déchets et Moyens Techniques](https://data.toulouse-metropole.fr/explore/dataset/points-dapport-volontaire-dechets-et-moyens-techniques/api/?rows=20&refine.commune=Toulouse)  
[Découpage administratif : Communes](https://geo.api.gouv.fr/decoupage-administratif/communes)

## Installation
* Install [Composer](https://getcomposer.org/download).
* Install [Yarn](https://yarnpkg.com/) or [NodeJS](https://nodejs.org/).
* Run the following commands:

```
# Clone the project to download its contents
> cd projects/
> git clone <your repository link>.git
or
> git clone https://github.com/charlottesaidi/eco_verre.git

# Make Composer and Yarn/NPM install the project's dependencies
# Warning: This template requires php >=8.0.0
> cd <your project name>
or
> cd /server && composer install && cd ../client && npm install
> cd /server && composer install && cd ../client && yarn install

```

* Finally, setup yours ``.env.local`` as the [.env](.env)  

## Usage
```
# Startup the Symfony server
> symfony server:start
or
> symfony serve

# Then startup the Symfony Encore server
> yarn dev
```

<<<<<<< HEAD
<<<<<<< HEAD
* Access the symfony server at http://localhost:8000 and next.js server at http://localhost:3000
=======
* Access the symfony server at http://localhost:8000 and next.js server at http://localhost:3000
>>>>>>> Update README.md
=======
* Access the symfony server at http://localhost:8000 and next.js server at http://localhost:3000
>>>>>>> b29b3f3... map branch

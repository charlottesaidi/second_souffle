# Second Souffle

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
#### Base de données  

Création :  
```bash
Symfony console doctrine:database:create
```
Migration :  
```bash
Symfony console doctrine:migration:migrate
```  

## Usage
```
# Startup the Symfony server
> symfony server:start
or
> symfony serve

# Then startup the Symfony Encore server
> yarn dev
```

* Access the symfony server at http://localhost:8000 and next.js server at http://localhost:3000
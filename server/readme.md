# Eco Verre


## Outils
- Back et endpoints api : Symfony 5.3
- Front : 
- APIs externes :  
[Data.Toulouse-métropole : Points d'Apport Volontaire - Déchets et Moyens Techniques](https://data.toulouse-metropole.fr/explore/dataset/points-dapport-volontaire-dechets-et-moyens-techniques/api/?rows=20&refine.commune=Toulouse)  
[Découpage administratif : Communes](https://geo.api.gouv.fr/decoupage-administratif/communes)

## Installation

### Installation du projet et de ses dépendances.

```bash
composer install
```

### Base de données

Création :  
```bash
Symfony console doctrine:database:create
```
Migration :  
```bash
Symfony console doctrine:migration:migrate
```

### Teste des endpoints apis sur Postman

Urls et méthodes dans src/controller/ApiController.php

#### Villes
https://127.0.0.1:8000/api/gouv/villes (récupère et insère les communes en bdd => requête à effectuer en premier)   
https://127.0.0.1:8000/api/villes (appelle les communes de la bdd)    
https://127.0.0.1:8000/api/ville/{nom} (détail d'une commune selon son nom)  
https://127.0.0.1:8000/api/ville/create (crée une commune)  
https://127.0.0.1:8000/api/ville/{nom}/edit (modifier une commune)    
https://127.0.0.1:8000/api/ville/{nom}/delete (supprime une commune)  

#### Bennes à verres
https://127.0.0.1:8000/api/gouv/records (récupère et insère les bennes à verre en bdd)  
https://127.0.0.1:8000/api/records (appelle les bennes à verres de la bdd)    
https://127.0.0.1:8000/api/record/{id} (détail d'une benne à verre selon son id)  
https://127.0.0.1:8000/api/record/create (crée une benne à verre)  
https://127.0.0.1:8000/api/record/{id}/edit (modifier une benne à verre)    
https://127.0.0.1:8000/api/record/{id}/delete (supprime une benne à verre)  
...

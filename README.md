# Global Search

Une application utilisant [Octools.io](https://octools.io)

## Presentation

Vous êtes comme nous une agence et vous avez une multitude de clients avec pour
chaque client un repository github, un chanel slack...
Nous avons mis en place une recherche globale et cross service.
Saisissez un mot clé et retrouvez toutes les issues, PR, message slack contenant
ce mot precis.
Un gain de temps pour retrouver l'information utile.

## Installation

La stack utilise Laravel + React (avec Inertia)

```shell
composer install
yarn && yarn dev
```

## Octools

L'outil Octools est utilisé en mode API dans ce projet pour avoir la possibilité
de faire des appels simultané avec Http Client.

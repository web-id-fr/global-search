.PHONY: help

#!make
include .env

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Installation des dépendances du projet
	composer install
	php artisan key:generate
	php artisan fixtures:create-database
	php artisan fixtures:create-database --database-name=global_search_test
	AFTER_INSTALL=1 make reload

reload: ## Mise à jour du projet, rechargement des données
    ifneq ($(AFTER_INSTALL), 1) # Si on est pas après make install, on lance les commandes de build
		composer install
    endif
	php artisan migrate:refresh
	php artisan migrate:refresh --database=mysql_test
	php artisan db:seed
	php artisan optimize:clear
	yarn
	yarn dev

test: ## Lance tout les tests automatisés
	vendor/bin/phpunit
	vendor/bin/phpstan
	vendor/bin/pint

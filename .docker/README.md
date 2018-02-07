# Purencool Docker LAMP Stack

## Dependencies
- Docker
- Docker compose
- Images
  - php:5-apache
  - mysql
  - mailhog
  - phpmyadmin/phpmyadmin

## Intital docker image setup
Bash command from the terminal `images/php-apache/build.sh`

## Start docker development environment
```shell
docker-compose up -d
```
Webserver `http://localhost:9000`
PhpMyAdmin : `http://localhost:9001`
Mailhog : `http://localhost:9002`

## Stop docker development environment
```shell
docker-compose stop
```
## Custom configuration on initial install
- `conf/php.ini` : PHP configuration file
- `conf/mysql.cnf` : MySQL configuration file
- `conf/php.ini` : Apache configuration file
- `conf/sites` : Apache virtual hosts


# Utils
## Stop all containers
`docker stop $(docker ps -a -q)`

## Remove all containers
`docker rm $(docker ps -a -q)`

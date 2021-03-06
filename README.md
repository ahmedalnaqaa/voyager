Voyager
======

> The Voyager program is an American scientific program that employs two robotic probes, Voyager 1 and Voyager 2, to study the outer Solar System. The probes were launched in 1977 to take advantage of a favorable alignment of Jupiter, Saturn, Uranus and Neptune. Although their original mission was to study only the planetary systems of Jupiter and Saturn, Voyager 2 continued on to Uranus and Neptune. The Voyagers now explore the outer boundary of the heliosphere in interstellar space; their mission has been extended three times and they continue to transmit useful scientific data. Neither Uranus nor Neptune has been visited by a probe other than Voyager 2.

> This is a new release of Voyager to discover NodeJs. 

This microservice for sending push & sms notifications using OneSignal third party.

Requirements
=======
* [Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04)
* [Docker Compose](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04)

Before Installation
=======
* Make sure that you stopped apache, nginx, mongodb on your local machine
* Check section `.Env Parameters` to update your .env file for starting.

Installation
=======
```ssh
$ git clone https://github.com/ahmedalnaqaa/voyager.git ./voyager
$ cd ./voyager
$ npm install
```
> Note:
When you run npm install, it will automatically create .env files to handle multiple environments. You
can edit it from this directory `./config/vars/` using the attached parameters in `.Env Parameters` section.
```ssh
$ docker-compose up
```
API docs
=======
> You can check the API docs from this url: `http://127.0.0.1:8080/api-docs`

Tests
=======
```ssh
$ docker-compose run test
```

.Env Parameters
=======
> Prod environment:

```ssh
NODE_ENV=prod
PORT=8080
APP_TITLE=Voyager

MONGO_DB_HOST=mongo
MONGO_DB_PORT=27017
MONGO_DB_NAME=voyager

ONE_SIGNAL_APP_ID=56d12785-181f-4b39-8157-0da819171e16
ONE_SIGNAL_APP_REST_API_KEY=ZGUyYjcwMTktNGZiNS00NTNhLWFkNmQtZDNiMjBmNGVlYzlm
```
> Test environment:

```ssh
NODE_ENV=test
PORT=3000
APP_TITLE=Voyager

MONGO_DB_HOST=mongo
MONGO_DB_PORT=27017
MONGO_DB_NAME=voyager_test

ONE_SIGNAL_APP_ID=56d12785-181f-4b39-8157-0da819171e16
ONE_SIGNAL_APP_REST_API_KEY=ZGUyYjcwMTktNGZiNS00NTNhLWFkNmQtZDNiMjBmNGVlYzlm
```

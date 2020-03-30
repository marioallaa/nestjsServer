# nestjsServer
A basic NodeJS server in which is implemented a database and jwt authentication. 



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## .env 
###### Environment Config.
```dotenv

TYPEORM_CONNECTION = mysql
TYPEORM_HOST = localhost
TYPEORM_USERNAME = root
TYPEORM_PASSWORD = admin
TYPEORM_DATABASE = test
TYPEORM_PORT = 3000
TYPEORM_SYNCHRONIZE = false
TYPEORM_LOGGING = true
TYPEORM_ENTITIES = src/**/*.entity{.ts,.js}

```
<br> <br>


## Endpoints: 
######Server running on http://localhost:3000 <br> <br>

######Profile endpoint: `Get: ` ``/profile`` <br>
``` Requires Bearer Token Authentication Header```

######Register user endpoint: `Post:` ``/auth/register``
```
Content of post request
{ 
  "username": "mario",
  "password": "alla"
}
```

######Log In user endpoint: `Post:` ``/auth/login``
```
Content of post request
{ 
  "username": "mario",
  "password": "alla"
}
```


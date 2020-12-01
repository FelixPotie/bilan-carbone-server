# bilan-carbone-server

## Prerequis

`npm install --save-dev typeorm`
`npm install pg --save`
`npm install -g typeorm`

database script

`docker run --rm -P -p 127.0.0.1:5432:5432 -e POSTGRES_PASSWORD="postgres"  -e POSTGRES_USER="postgres" --name pife-bilan-carbone postgres:alpine`

## Run the server

`npm run start`

# Dockerized-Node

1. Set up environment variables.
2. Create an API for each component.
   1. Create a model (model.js).
   2. Create a controller (controller.js).
   3. Create a router (index.js) using the methods in the controller.
3. Use app.js to connect to the DB, use the routes, and start the server.
4. Create a test for each API and run the test suite.

## Development

`docker-compose up`

This uses the docker-compose.yml file to build the services for development. <br>
It does not use a docker volume, which means that the data will not persist when docker-compose is stopped.

## Testing

### Start the development container.

In a new terminal, list the running containers with: <br>
`docker ps`

### Open a terminal inside of it.

Copy the `CONTAINER ID` for the node-app container and use:<br>
`docker exec -it <CONTAINER ID> sh`

### Run the test suite.

`npm run test`

## Production

`docker-compose -f production.yml up`

This uses the production.yml file to build the services for production. <br>
It uses a docker volume for data persistence.

## Stop docker-compose

`Control-C`

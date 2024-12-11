# Fuente Azul

## 💻 I'm a dev, how do I get started?

Prerequisites:

- [Node.js](https://nodejs.org/es/download)
- [TypeScript](https://www.typescriptlang.org)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://docs.docker.com/get-docker/)

Now:

```bash
git clone git@github.com:acidtango/fuente-azul-backend.git
cd fuente-azul-backend
yarn install
yarn start:dev # opens the server in development mode
```

You are now good ready to go!! 👯

### `yarn` scripts

- `build`: Compiles the project for later using `yarn start`
- `initialize:db`: Initializes a local database
- `start`: Opens the server by compiling the sources on the fly
- `start:dev`: Opens the server compiling the project on the fly in watch mode
- `start:prod`: Opens the server in production mode using the compiled sources
- `typecheck`: Checks the typing integrity of the project
- `lint:check`: Lints all the files
- `lint:fix`: Lints and fixes all the files

- `test`: Runs all the tests
- `test:unitary`: Runs unitary tests
- `test:integration`: Runs integration tests that uses local elements (local database, local event bus, etc...)
- `test:integration:third-party`: Runs integration tests that uses third party elements (stripe, email services, etc...)
- `test:e2e:memory`: Runs E2E tests using the in-memory repositories
- `test:e2e:db`: Runs E2E tests using the real database repositories
- `precommit`: Runs all the necessary commands that would make the CI pass

### Docker

We use Docker as a utility tool, mainly for running MongoDB. In the `docker-compose.yml` you have two wservuces services:

- `codetalk`: The API if you want to open it as a docker container
- `database`: A mongodb database that we use for starting the API in development mode and running the integration tests locally.

### Project management

- [Notion](https://www.notion.so/acidtango/Mahou-Fuente-Azul-14230ddedca080979c81c2f1a3460f80)
- [Github repo](https://github.com/acidtango/fuente-azul-backend)
- [Github Actions](https://github.com/acidtango/fuente-azul-backend/actions)
- [Figma](https://www.figma.com/design/05318e3AFTWoFMwGj4ow4B/Design---Fuente-Azul)

## 🛠 Which technologies are you using?

- Node
- [Nestjs](https://nestjs.com/)
    - Validations with [Class Validator & Class Transformer](https://docs.nestjs.com/techniques/validation)
    - [OpenAPI docs](https://docs.nestjs.com/openapi/introduction)
    - Mainly used as dependency injection container
- TypeScript

### CI/CD

- The CI and CD are in Github Actions
- The CI runs for both acceptance/unitary and integration tests with a real database.
- After all tests passed, then the API is re-deployed
# vue-techno-courses

A simple SPA project using vue and vue-vouter.

## Project setup

This project use `json-server` package to simulate a fake API. To be able to view all the features it is necessary to install it and also the other dependencies:

```sh
yarn global add json-server && yarn
```

### Enabling fake API server

Open a terminal inside the project directory and run the following code:

```sh
json-server --watch ./api/api.json
```

### Compiles and hot-reloads for development

To run the project, open a new tab in your terminal and run the following code:

```sh
yarn serve
```

### Compiles and minifies for production

To compile and get the production version run the following code:

```sh
yarn build
```

### Lints and fixes files

To run the linter and solve the problems pointed out by it, run the following code:

```sh
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

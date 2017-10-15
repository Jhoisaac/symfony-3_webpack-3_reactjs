# Symfony3+Webpack3+ReactJSv16 = Isomorphic WebApp

This repository is based in the project by [Ryan Weaver](https://github.com/weaverryan) - symfonycat-js [Webpack Tutorial](https://github.com/weaverryan/symfonycat-js).

## Setup

### 1) Install the vendor libs with Composer!

[Download Composer](https://getcomposer.org/) either globally or right
into *this* directory, and then (from this directory), run:

```bash
php composer.phar install
```

This will iteractively ask you for some settings - like `database_host`.
Fill those in. If you make a mistake - just modify `app/config/parameters.yml`
afterwards!

If you get an error about "Unknown Database" - it's cool! Ignore it for now :)

### 2) Bootstrap the database

To get your database up and running, execute the following commands:

```php
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
php bin/console h:d:f:l
```

If you get any errors, check your database settings in `app/config/parameters.yml`.

### 3) Install the node modules libs with Yarn

[Download Yarn](https://yarnpkg.com/en/docs/install) and then (from current directory), run:

```bash
yarn install
```
    
### 4) Start your web server

We recommend using the built-in PHP web server. To start it, run:

```bash
php bin/console server:run
```

Then, load the site at:

    http://localhost:8000
    
### 5) Start webpack dev server (with HMR - Hot Modules Replacement)

To start it, run:

```bash
yarn start
```

Then, your assets files like js, css, scss, images are served through webpack:

    http://localhost:8080

### Credits
This symfony-3_webpack-3_reactjs WebApp and all settings is heavily inspired 
by the great KnpUniversity tutorial [JavaScript for PHP Geeks: Webpack for Module Loading Awesomeness](https://knpuniversity.com/screencast/javascript-webpack/).
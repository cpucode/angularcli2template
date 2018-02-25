# Angularcli2template

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development Restful server Db.Json Demo 

Run `npm run startall` to start both a dev server on port 4200  and a dev local restful server on port 3050. Navigate to `http://localhost:4200/actors`. This will redirect the request to a proxy server that is running and started on `http://localhost:3050` use proxy.conf.js to config the server fully. Actors returns a demo json file of actors who have appeared in starwars movies. I use `concurrently` to start both demo restful server is which `json-server` and the webpack dev server. as shown below :    

"startall": "concurrently \"npm run rest\" \"npm run web\""

"web": "ng server --proxy-config proxy.conf.js" 

"rest": "json-server db.json --port 3050"


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

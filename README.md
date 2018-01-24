# Solar System Info with Browserify

![](https://img.shields.io/badge/data-static-lightgrey.svg)
![](https://img.shields.io/badge/template-handlebars-orange.svg)
![](https://img.shields.io/badge/js-jquery-blue.svg)
![](https://img.shields.io/badge/modularity-browserify-ff69b4.svg)

![](https://img.shields.io/badge/mvp-working-brightgreen.svg)
![](https://img.shields.io/badge/bonus-none-lightgrey.svg)

## Run Locally

```
> git clone git@github.com:kenziebottoms/nss-front-03-planets.git
...
> npm install
> grunt
```

## Requirements

You'll be creating a web page that will display important scientific data about all eight planets in our solar system. :warning: The information about each planet will be separate modules.

1. Each module will export a single function named `outputTo` that will accept a single argument. That argument's value will be the DOM element reference into which it will insert information about a planet.

    ```js
    function outputTo(domElement) {
      domElement.append(...);
    }
    ```
    
2. Each module should output the following information.
    - [x] Name
    - [x] Year discovered
    - [x] Mass
    - [x] Size
    - [x] Distance from Sun
    - [x] Atmosphere composition
    - [x] Satellites
    - [x] Name of any probes/orbiters/explorers that have visited or landed on that planet

3. Create a `main` module that uses `require` to include each planet's module as a dependency and calls the `outputTo()` method for each one, in the right order.

- [x] Mercury
- [x] Venus
- [x] Earth
- [x] Mars
- [x] Jupiter
- [x] Saturn
- [x] Uranus
- [x] Neptune

## Bonus stretch goal

Once you've got the basic implementation working, find a way to have the `outputTo()` only defined once, and still be able to output each planet's information to the DOM. It can't be defined in the `main` module.
"use strict";

const mercury = require("./planets/mercury");
const venus = require("./planets/venus");
const earth = require("./planets/earth");
const mars = require("./planets/mars");
const jupiter = require("./planets/jupiter");

mercury.outputTo(document.getElementById("mercury"));
venus.outputTo(document.getElementById("venus"));
earth.outputTo(document.getElementById("earth"));
mars.outputTo(document.getElementById("mars"));
jupiter.outputTo(document.getElementById("jupiter"));
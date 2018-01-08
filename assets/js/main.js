"use strict";

const mercury = require("./planets/mercury");
const venus = require("./planets/venus");
const earth = require("./planets/earth");

mercury.outputTo(document.getElementById("mercury"));
venus.outputTo(document.getElementById("venus"));
earth.outputTo(document.getElementById("earth"));
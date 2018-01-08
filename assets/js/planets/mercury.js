"use strict";

let planet = {
    "name": "Mercury",
    "discovered": "14th century B.C.",
    "mass": "3.3011 &times; 10<sup>23</sup> kg",
    "diameter": "4,879.4 km",
    "distance_from_sun": "46,000,000 to 70,000,000 km",
    "atmospheric_composition": [
        ["42.0%", "oxygen"],
        ["29.0%", "sodium"],
        ["22.0%", "hydrogen"],
        ["6.0%", "helium"],
        ["0.5%", "potassium"],
        ["trace", "argon"],
        ["trace", "nitrogen"],
        ["trace", "carbon dioxide"],
        ["trace", "water vapor"],
        ["trace", "xenon"],
        ["trace", "krypton"],
        ["trace", "neon"]
    ],
    "satellites": [],
    "visiting_probes": [
        "Mariner 10",
        "MESSENGER",
        "BepiColombo"
    ],
    "year": "88 days"
};

const outputTo = domElement => {
    const template = require("../../templates/tall-stats.hbs");
    domElement.innerHTML = template({"planet": planet});
};

module.exports = {outputTo};
"use strict";

let planet = {
    "name": "Neptune",
    "discovered": "September 23, 1846",
    "mass": "1.0243 &times; 10<sup>26</sup> kg",
    "diameter": "49,244 km",
    "distance_from_sun": "4,500,000,000 km",
    "atmospheric_composition": [
        ["80%", "hydrogen"],
        ["19%", "helium"],
        ["1.5%", "methane"],
        ["0.019%", "hydrogen deuteride"],
        ["0.00015%", "ethane"],
    ],
    "satellites": [
        "Naiad",
        "Thalassa",
        "Despina",
        "Galatea",
        "Larissa",
        "Proteus",
        "Triton",
        "Nereid",
        "Halimede",
        "Sao",
        "Laomedeia",
        "Psamathe",
        "Neso"
    ],
    "visiting_probes": [
        "Voyager 2"
    ],
    "year": "164.79 years"
};

const outputTo = domElement => {
    const template = require("../../templates/compact-stats.hbs");
    domElement.innerHTML = template({"planet": planet});
};

module.exports = {outputTo};
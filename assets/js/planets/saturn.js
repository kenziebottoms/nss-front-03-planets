"use strict";

let planet = {
    "name": "Saturn",
    "discovered": "~700 B.C.",
    "mass": "5.6834 &times; 10<sup>26</sup> kg",
    "diameter": "116,464 km",
    "distance_from_sun": "~1,400,000,000 km",
    "atmospheric_composition": [
        ["96.3%", "hydrogen"],
        ["3.25%", "helium"],
        ["0.45%", "methane"],
        ["0.0125%", "ammonia"],
        ["0.0110%", "hydrogen deuteride"],
        ["0.0007%", "ethane"]
    ],
    "satellites": [
        "Mimas",
        "Enceladus",
        "Tethys",
        "Dione",
        "Rhea",
        "Titan",
        "Iapetus",
        "Many, many others"
    ],
    "visiting_probes": [
        "Pioneer 11",
        "Voyager 1",
        "Voyager 2",
        "Cassini-Huygens",
    ],
    "year": "29.46 years"
};

const outputTo = domElement => {
    const template = require("../../templates/3-col-stats.hbs");
    domElement.innerHTML = template({"planet": planet});
};

module.exports = {outputTo};
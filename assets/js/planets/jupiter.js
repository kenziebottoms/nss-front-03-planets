"use strict";

let planet = {
    "name": "Jupiter",
    "discovered": "7th century B.C.",
    "mass": "1.8982 &times; 10<sup>27</sup> kg",
    "diameter": "142,984 km",
    "distance_from_sun": "~778,000,000 km",
    "atmospheric_composition": [
        ["89%", "hydrogen"],
        ["10%", "helium"],
        ["0.3%", "methane"],
        ["0.026%", "ammonia"],
        ["0.0028%", "hydrogen deuteride"],
        ["0.0006%", "ethane"],
        ["0.0004%", "water"],
    ],
    "satellites": [
        "Metis",
        "Adrastea",
        "Amalthea",
        "Thebe",
        "Io",
        "Europa",
        "Ganymede",
        "Callisto",
        "Themisto",
        "Leda",
        "Himalia",
        "Lysithea",
        "Elara",
        "Dia",
        "Carpo",
        "Many, many others"
    ],
    "visiting_probes": [
        "Pioneer 10",
        "Pioneer 11",
        "Voyager 1",
        "Voyager 2",
        "Ulysses",
        "Galileo",
        "Cassini",
        "New Horizons",
        "Juno"
    ],
    "year": "11.86 years"
};

const outputTo = domElement => {
    const template = require("../../templates/3-col-stats.hbs");
    domElement.innerHTML = template({"planet": planet});
};

module.exports = {outputTo};
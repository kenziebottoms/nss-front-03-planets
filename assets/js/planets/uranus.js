"use strict";

let planet = {
    "name": "Uranus",
    "discovered": "March 13, 1781",
    "mass": "8.6810 &times; 10<sup>25</sup> kg",
    "diameter": "50,724 km",
    "distance_from_sun": "~3,000,000,000 km",
    "atmospheric_composition": [
        ["83%", "hydrogen"],
        ["15%", "helium"],
        ["2.3%", "methane"],
        ["0.009%", "hydrogen deuteride"],
        ["ice", "ammonia"],
        ["ice", "water"],
        ["ice", "ammonium hydrosulfide"],
        ["ice", "methane hydrate"],
    ],
    "satellites": [
        "Cordelia",
        "Ophelia",
        "Bianca",
        "Cressida",
        "Desdemona",
        "Juliet",
        "Portia",
        "Rosalind",
        "Cupid",
        "Belinda",
        "Perdita",
        "Puck",
        "Mab",
        "Miranda",
        "Ariel",
        "Umbriel",
        "Titania",
        "Oberon",
        "Other irregular moons"
    ],
    "visiting_probes": [
        "Voyager 2"
    ],
    "year": "84 years"
};

const outputTo = domElement => {
    const template = require("../../templates/compact-stats.hbs");
    domElement.innerHTML = template({"planet": planet});
};

module.exports = {outputTo};
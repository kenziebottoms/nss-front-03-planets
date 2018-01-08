"use strict";

let planet = {
    "name": "Mars",
    "discovered": "4th millennium B.C.",
    "mass": "6.4171 &times; 10<sup>23</sup> kg",
    "diameter": "6,779.0 km",
    "distance_from_sun": "~230,000,000 km",
    "atmospheric_composition": [
        ["95.97%", "carbon dioxide"],
        ["1.93%", "argon"],
        ["1.89%", "nitrogen"],
        ["0.146%", "oxygen"],
        ["0.0557%", "carbon monoxide"]
    ],
    "satellites": [
        "Phobos",
        "Deimos"
    ],
    "visiting_probes": [
        "2001 Mars Odyssey",
        "Mars Express",
        "Mars Reconnaissance Orbiter",
        "MAVEN",
        "Mars Orbiter Mission",
        "ExoMars Trace Gas Orbiter",
        "Mars Exploration Rover Opportunity",
        "Mars Science Laboratory Curiosity"
    ],
    "year": "686 days"
};

const outputTo = domElement => {
    const template = require("../../templates/compact-stats.hbs");
    domElement.innerHTML = template({"planet": planet});
};

module.exports = {outputTo};
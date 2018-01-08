"use strict";

let planet = {
    "name": "Venus",
    "discovered": "2nd millennium B.C.",
    "mass": "4.8675 &times; 10<sup>24</sup> kg",
    "diameter": "12,103.6 km",
    "distance_from_sun": "~108,000,000 km",
    "atmospheric_composition": [
        ["96.5%", "carbon dioxide"],
        ["3.5%", "nitrogen"],
        ["0.015%", "sulphur dioxide"],
        ["0.007%", "argon"],
        ["0.002%", "water vapor"],
        ["0.0017%", "carbon monoxide"],
        ["0.0012%", "helium"],
        ["0.0007%", "neon"],
        ["trace", "carbonyl sulfide"],
        ["trace", "hydrogen chloride"],
        ["trace", "hydrogen fluoride"]
    ],
    "satellites": [],
    "visiting_probes": [
        "Mariner 2",
        "Venera 3",
        "Venera 4",
        "Mariner 5",
        "Mariner 10",
        "Venera 9",
        "Venera 10",
        "Venera 13",
        "Venera 14",
        "Pioneer Venus Orbiter",
        "Pioneer Venus Multiprobe",
        "Venera 15",
        "Venera 16",
        "Vega 1",
        "Vega 2",
        "Galileo",
        "Magellan",
        "Cassini-Huygens",
        "MESSENGER",
        "Venus Express",
        "Akatsuki"
    ],
    "year": "224.7 days"
};

const outputTo = domElement => {
    const template = require("../../templates/tall-stats.hbs");
    domElement.innerHTML = template({"planet": planet});
};

module.exports = {outputTo};
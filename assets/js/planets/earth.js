"use strict";

let planet = {
    "name": "Earth",
    "mass": "5.97237 &times; 10<sup>24</sup> kg",
    "diameter": "12,756.2 km",
    "distance_from_sun": "~150,000,000",
    "atmospheric_composition": [
        ["78%", "nitrogen"],
        ["21%", "oxygen"],
        ["trace", "water vapor"],
        ["trace", "carbon dioxide"]
    ],
    "satellites": ["Moon"],
    "year": "365 days"
};

const outputTo = domElement => {
    const template = require("../../templates/earth-stats.hbs");
    domElement.innerHTML = template({"planet": planet});
};

module.exports = {outputTo};
"use strict";

let planet = {
    "name": "Mercury",
    "discovered": "14th century B.C.",
    "mass": "3.3011 &times; 10<sup>23</sup> kg",
    "diameter": "4,879.4 km",
    "distance_from_sun": "46,000,000 to 70,000,000 km",
    "atmospheric_composition": [
        {"oxygen": "42.0%"},
        {"sodium": "29.0%"},
        {"hydrogen": "22.0%"},
        {"helium": "6.0%"},
        {"potassium": "0.5%"},
        {"argon": "trace"},
        {"nitrogen": "trace"},
        {"carbon dioxide": "trace"},
        {"water vapor": "trace"},
        {"xenon": "trace"},
        {"krypton": "trace"},
        {"neon": "trace"}
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
    let content = `<planet id="${planet.name}">
        <h3 class="my-3">${planet.name}</h3>
        <div class="d-flex">
            <div class="stat">
                <i class="material-icons">event</i> ${planet.discovered}
            </div>
            <div class="stat">
                <i class="material-icons">work</i> ${planet.mass}
            </div>
            <div class="stat">
                <i class="material-icons">accessibility</i> ${planet.diameter}
            </div>
            <div class="stat">
                <i class="material-icons">repeat_one</i> ${planet.year}
            </div>
        </div>
    </planet>`;
    $(domElement).append(content);
};

module.exports = {outputTo};
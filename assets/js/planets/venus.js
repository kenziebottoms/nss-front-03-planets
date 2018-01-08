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
    let content = `<planet id="${planet.name}">
        <h3 class="my-3">${planet.name}</h3>
        <div class="row">
            <div class="col-6">
                <h5 class="my-4">Atmospheric Composition</h5>
                <table class="table atmos table-striped">
                    <thead>
                        <th>Percentage</th>
                        <th>Element</th>
                    </thead>
                    <tbody>`;
                        planet.atmospheric_composition.forEach(component => {
                            content += `<tr>
                                <td>${component[0]}</td>
                                <td>${component[1]}</td>
                            </tr>`;
                        });
                    content += `</tbody>
                </table>
            </div>
            <div class="col-6">
                <h5 class="my-4">Statistics</h5>
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
                <div class="stat">
                    <i class="material-icons">directions_run</i> ${planet.distance_from_sun} from the sun
                </div>
                <h5 class="my-4">Satellites</h5>
                <ul>`;
                    if (planet.satellites.length > 0) {
                        planet.satellites.forEach(satellite => {
                            content += `<li>${satellite}</li>`;
                        });
                    } else {
                        content += "<li>None</li>";
                    }
                content += `</ul>
                <h5 class="my-4">Probes/Explorers</h5>
                <ul>`;
                    if (planet.visiting_probes.length > 0) {
                        planet.visiting_probes.forEach(probe => {
                            content += `<li>${probe}</li>`;
                        });
                    } else {
                        content += `<li>None</li>`;
                    }
                content += `</ul>
            </div>
        </div>
    </planet>`;
    $(domElement).append(content);
};

module.exports = {outputTo};
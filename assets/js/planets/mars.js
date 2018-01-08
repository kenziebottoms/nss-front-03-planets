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
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
            </div>
        </div>
    </planet>`;
    $(domElement).append(content);
};

module.exports = {outputTo};
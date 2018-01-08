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
    let content = `<planet id="${planet.name}">
        <h3 class="my-3">${planet.name}</h3>
        <div class="row d-flex">
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
        </div>
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
/*
Skript fuer die Neuseelandreise
*/

let stop ={
    nr: 3,
    title: "Auckland",
    user: "samuesl",
    lat: -36.83,
    lng: 174.8,
    zoom: 13,
};

//Karte inititlaisieren
let map = L.map('map').setView([stop.lat, stop.lng], stop.zoom);

//Hintergrundkarte realisieiren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
<!--Koordinate um 100el erweitert, damit der Marker in der Mitte sitzt-->

//Marker zeinchen
let marker = L.marker([stop.lat, stop.lng]).addTo(map);

//Popup definieren und öffnen
marker.bindPopup(`
    <h2>${stop.title}</h2>
        <ul>
            <li> Geogr. Breite: ${stop.lat.toFixed(5)}°</li>
            <li> Geogr. Länge: ${stop.lng.toFixed(5)}°</li>
        </ul>
`).openPopup();


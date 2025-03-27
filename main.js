/*
Skript fuer die Neuseelandreise
*/

//variablen
let lat = -36.83;
let lng = 174.8;
let zoom = 13;

let stop ={
    nr: 3,
    title: "Auckland"
    user: "samuesl",
    lat: "lat",
    lng: "lng",
    zoom: "zoom",
};

//Karte inititlaisieren
let map = L.map('map').setView([lat, lng], zoom);

//Hintergrundkarte realisieiren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
<!--Koordinate um 100el erweitert, damit der Marker in der Mitte sitzt-->

//Marker zeinchen
let marker = L.marker([lat, lng]).addTo(map);

//Popup definieren und öffnen
ul
marker.bindPopup(`
    <h2>Auckland</h2>
        <ul>
            <li> Geogr. Breite: ${lat.toFixed(5)}°</li>
            <li> Geogr. Länge: ${lng.toFixed(5)}°</li>
        </ul>
`).openPopup(); 


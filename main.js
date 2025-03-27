/*
Skript fuer die Neuseelandreise
*/

//variablen
let lat = -36.83;
let lng = 174.8;
let zoom = 13;

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
marker.bindPopup(`<b>Hello world!</b>
    <br>
    I am a popup.
`).openPopup(); 

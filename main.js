/*
Skript fuer die Neuseelandreise
*/
//Karte inititlaisieren
let map = L.map('map').setView([-36.83, 174.8], 13);

//Hintergrundkarte realisieiren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
<!--Koordinate um 100el erweitert, damit der Marker in der Mitte sitzt-->

//Marker zeinchen
let marker = L.marker([-36.831, 174.81]).addTo(map);

//Popup definieren und öffnen
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup(); 

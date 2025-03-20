var map = L.map('map').setView([-36.83, 174.8], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
<!--Koordinate um 100el erweitert, damit der Marker in der Mitte sitzt-->
var marker = L.marker([-36.831, 174.81]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup(); 

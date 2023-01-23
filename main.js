var map = L.map('mapid').setView([-23.5640, -46.6897], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-23.564033114892695, -46.689786626651355]).addTo(map)
    .bindPopup('Ap do João')
    .openPopup();
const mapboxgl = require('mapbox-gl');
const markers = require('./marker');
mapboxgl.accessToken = 'pk.eyJ1Ijoic3Bvb25zMTIzIiwiYSI6ImNqOGJydmF2bDAxNXIycW8wd2MxZWV0YXMifQ.e2tHK-kLXKdoXZThDMOMEw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const marker = document.createElement('div');
marker.style.width = '32px';
marker.style.height = '39px';
marker.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';


new mapboxgl.Marker(marker).setLngLat([-74.009, 40.705]).addTo(map);

//mapbox login: spoons123 , FullstackACHU

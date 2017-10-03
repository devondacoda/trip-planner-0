function makeMarker(thingToDo, coordinates) {
  const options = {
    activity: 'http://i.imgur.com/WbMOfMl.png',
    hotel: 'http://i.imgur.com/D9574Cu.png',
    restaurant: 'http://i.imgur.com/cqR6pUI.png'
  }

  const marker = document.createElement('div', {id: thingToDo});
  marker.style.width = "32px";
  marker.style.height = "39px";
  marker.style.backgroundImage = options[marker.id];

  new mapboxgl.Marker(marker).setLngLat(coordinates);
}

module.exports = {
  makeMarker
};

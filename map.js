//creating our object 'map' and setting its starting view
const map = L.map('map', {
    center: [36.095946, -79.266499],
    zoom: 15,
}); 

//enabling us to see the physical area by using OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//creating a starter marker in a distinct area that tells us where we are at
const marker = L.marker([36.095946, -79.266499]).addTo(map)
marker.addTo(map).bindPopup('<p>Mebane, NC</p>').openPopup()

//obtaining users location 
async function getUserCoords(){
    position = await new Promise ((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })  
    return [position.coords.latitude, position.coords.longitude]
}

//implementing FourSqaure in order to retrieve selected locations of buisness types
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'fsq3F+PTdSeOEC8p6gbFi1ure+TQMlFvHqK9f5imRVTQcWI='
    }
  };

  fetch('https://api.foursquare.com/v3/places/search?query=GasStation', options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
//creating a function to establish buisness types within a selection menu
const container = document.createElement('div');
// document.body.onload = container;




//creating business types array
const businessTypes = ['Restaurants', 'Gas Stations', 'Hotels', 'Grocery Store']





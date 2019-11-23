// Init weather & ui & localstorage objects
const ui = new UI();
const storage = new LocalStorage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object with localstorage
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change location
  weather.changeWeatherLocation(city, state);

  // Save location to local storage
  storage.setLocationData(city, state);

  // Display weather on the ui
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

function getWeather(){
  weather.getWeather()
  .then(data => ui.paint(data))
  .catch(err => console.log(err));
}



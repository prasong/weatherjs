class Weather {
  constructor(city, state) {
    this.apiKey = 'a255ed6c5b8406bb';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeWeatherLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
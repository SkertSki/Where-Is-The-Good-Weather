import dotenv from 'dotenv';
dotenv.config();

//API findCoordinates : geo/1.0/direct?q={city name}&limit={3}&appid={API key}&units=imperial
//API findCity : data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}&units=imperial

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  latitude: number;
  longitude: number;
}

// TODO: Define a class for the Weather object
class WeatherObject {
  //something
}

// TODO: Complete the WeatherService class
class WeatherService implements Coordinates{
  // TODO: Define the baseURL, API key, and city name properties
  private cityName: string;
  latitude: number;
  longitude: number;
  private cityTemp: number;
  private cityWind: number;
  private cityHumid: number;
  private baseURL?: string;
  private apiKey?: string;

  constructor(
    cityName:string, 
    cityLat: number, 
    cityLong: number,
    cityTemp: number,
    cityWind: number,
    cityHumid: number,
  ) {
    this.cityName = cityName;
    this.latitude = cityLat;
    this.longitude = cityLong;
    this.cityTemp = cityTemp;
    this.cityWind = cityWind;
    this.cityHumid = cityHumid;
    this.baseURL = process.env.API_BASE_URL || '';
    this.apiKey = process.env.API_KEY || '';
  }

  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {

  }

  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates): Coordinates {
    try{



    }catch(err){
      console.error('Error', err)
      throw err
    } 
  }

  // TODO: Create buildGeocodeQuery method
  buildGeocodeQuery(): string {

    const city: any = document.getElementById('search-input') as HTMLInputElement;     // 'as HTMLInoutElement' might need to be deleted
    const cityName = city.toLowerCase.trim();
    this.cityName = cityName.value;
    console.log(cityName);

    const citySearched = `${this.baseURL}/geo/1.0/direct?q=${cityName}&limit=5&appid=${this.apiKey}&units=imperial`;

    const coordinates = citySearched//    1. Req info from API, 2. Grab raw json data 3. Return raw json data

    return coordinates
  }

  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coordinates: Coordinates): string {

    const coordinates = this.buildGeocodeQuery() //   pulls raw json file with coordinates
    //Req weather data from API
    //input lat and long into new api function
    const lat: number = 123;
    const long: number = 123;
    const weatherData = `${this.baseURL}/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${this.apiKey}&units=imperial`;
    console.log(weatherData);

    //use above API URI to find weather data for the city
    //  1. Req info from API, 2. Grab raw json data

    this.cityTemp = weatherData;//   API temp value
    this.cityWind = weatherData;//   API wind value
    this.cityHumid = weatherData;//    API humidity value

    return weatherData
  }

  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {

  }

  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates) {

  }

  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any) {

  }

  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]) {

  }

  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {

  }
}

export default new WeatherService();

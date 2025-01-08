const API_KEY = process.env.WEATHER_API_KEY;
const GEO_API_URL = 'http://api.openweathermap.org/geo/1.0/direct';
const FORECAST_API_URL = 'http://api.openweathermap.org/data/3.0/onecall';

export const getCoordinates = async (city: string, state?: string) => {
  const query = state ? `${city},${state}` : city;
  const response = await fetch(`${GEO_API_URL}?q=${query}&appid=${API_KEY}`);
  const data = await response.json();
  if (!data || data.length === 0) {
    throw new Error('City not found');
  }
  return {
    lat: data[0].lat,
    lon: data[0].lon,
  };
};

export const getForecast = async (lat: number, lon: number) => {
  const response = await fetch(`${FORECAST_API_URL}?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${API_KEY}`);
  return await response.json();
}
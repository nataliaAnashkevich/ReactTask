import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pfa.foreca.com/api/v1/',
  timeout: 3000,
  headers: { Authorization: `Bearer ${process.env.TOKEN}` }
});

export const getCurrentWeather = async (longitude, latitude) => {
  const result = await instance.get(`/current/${longitude},${latitude}`);
  return result.data.current;
};

export const getLocationByCoords = async (longitude, latitude) => {
  const result = await instance.get(`/location/${longitude},${latitude}`);
  return {
    id: result.data.id,
    city: result.data.name,
    country: result.data.country
  };
};

export const getHourlyWeather = async (longitude, latitude) => {
  const result = await instance.get(`/forecast/hourly/${longitude},${latitude}`);
  return result.data.forecast;
};

export const getLocationById = async locationId => {
  const result = await instance.get(`/location/${locationId}`);
  return {
    city: result.data.name,
    country: result.data.country,
    longitude: result.data.lon,
    latitude: result.data.lat
  };
};

export const getLocations = async query => {
  const result = await instance.get(`/location/search/${query}`);
  return result.data.locations;
};

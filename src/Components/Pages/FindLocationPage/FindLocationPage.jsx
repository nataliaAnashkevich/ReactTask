import { useCallback, useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router';
import { getLocationById, getCurrentWeather } from '../../../Api/weatherApi';
import LocationSearch from '../../LocationSearch/LocationSearch';
import CurrentLocation from '../../CurrentLocation/CurrentLocation';
import WeatherCard from '../../WeatherCard/WeatherCard';

function FindLocation() {
  const navigate = useNavigate();
  const { locationId } = useParams();

  const [selectedLocation, setSelectedLocation] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (locationId) {
      invokeAction(async () => {
        const results = await getLocationById(locationId);
        setSelectedLocation(results);
      });
    } else {
      setSelectedLocation(null);
      setCurrentWeather(null);
    }
  }, [locationId]);

  useEffect(() => {
    if (selectedLocation) {
      invokeAction(async () => {
        const results = await getCurrentWeather(
          selectedLocation.longitude,
          selectedLocation.latitude
        );
        setCurrentWeather(results);
      });
    }
  }, [selectedLocation]);

  const itemChooseHandler = item => {
    navigate(`/findLocation/${item.id}`);
  };

  const searchErrorHandler = useCallback(error => {
    setError(error);
  }, []);

  async function invokeAction(action) {
    try {
      await action();
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div>
      <h1>Find location</h1>
      <LocationSearch onItemClick={itemChooseHandler} onError={searchErrorHandler} />
      {error && <p>Error occurred. Please, try to search again later</p>}
      {selectedLocation && <CurrentLocation currentLocation={selectedLocation} />}
      {currentWeather && <WeatherCard {...currentWeather} />}
      <Outlet />
    </div>
  );
}

export default FindLocation;

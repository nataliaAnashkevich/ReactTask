import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router';
import { getLocationById, getCurrentWeather } from '../../../Api/weatherApi';
import LocationSearch from '../../LocationSearch/LocationSearch';
import CurrentLocation from '../../CurrentLocation/CurrentLocation';
import { capitalize } from '../../../helpers/formatHelper';
import SafeWeatherImage from '../../SafeImage/SafeWeatherImage';

function FindLocation() {
  const navigate = useNavigate();
  const { locationId } = useParams();

  const [selectedLocation, setSelectedLocation] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [error, setError] = useState();

  useEffect(async () => {
    if (locationId) {
      await invokeAction(async () => {
        const results = await getLocationById(locationId);
        setSelectedLocation(results);
      });
    } else {
      setSelectedLocation(undefined);
      setCurrentWeather(undefined);
    }
  }, [locationId]);

  useEffect(async () => {
    if (selectedLocation) {
      await invokeAction(async () => {
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

  const searchErrorHandler = error => {
    setError(error);
  };

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
      {currentWeather && <p>Temperature: {currentWeather.current.temperature}%</p>}
      {currentWeather && <p>Probability of precipitation: {currentWeather.current.precipProb}%</p>}
      {currentWeather && <p>{capitalize(currentWeather.current.symbolPhrase)}</p>}
      {currentWeather && <SafeWeatherImage symbolCode={currentWeather.current.symbol} />}
      <Outlet />
    </div>
  );
}

export default FindLocation;

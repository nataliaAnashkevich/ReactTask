import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserLocationWeather } from './homePageActions';
import Loader from '../../Loader/Loader';
import { getLocation } from '../../../Store/selectors/geoSelectors';
import { getCurrentWeather, getLoading } from './homePageSelectors';
import CurrentLocation from '../../CurrentLocation/CurrentLocation';
import WeatherCard from '../../WeatherCard/WeatherCard';

function HomePage() {
  const dispatch = useDispatch();
  const location = useSelector(getLocation);
  const currentWeather = useSelector(getCurrentWeather);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchUserLocationWeather());
  }, []);

  return (
    <>
      <h1>Home</h1>
      {loading && <Loader />}
      {location && <CurrentLocation currentLocation={location} />}
      {currentWeather && <WeatherCard {...currentWeather} />}
    </>
  );
}

export default HomePage;

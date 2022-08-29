import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLocation } from '../../../Store/selectors/geoSelectors';
import HourlyWeatherItem from '../../HourlyWeatherItem/HourlyWeatherItem';
import { fetchUserLocationDetailedWeather } from './detailedForecastPageActions';
import { getHourlyWeather, getLoading } from './detailedForecastPageSelectors';
import Loader from '../../Loader/Loader';
import CurrentLocation from '../../CurrentLocation/CurrentLocation';

function DetailedForecastPage() {
  const dispatch = useDispatch();
  const location = useSelector(getLocation);
  const hourlyWeather = useSelector(getHourlyWeather);
  const loading = useSelector(getLoading);

  useEffect(async () => {
    dispatch(fetchUserLocationDetailedWeather());
  }, []);

  return (
    <div>
      <h1>Detailed Page</h1>
      {loading && <Loader />}
      {location && <CurrentLocation currentLocation={location} />}
      {hourlyWeather &&
      hourlyWeather.map(hourlyItem => (
        <HourlyWeatherItem key={`${location.id}_${hourlyItem.time}`} hourly={hourlyItem} />
      ))}
    </div>
  );
}

export default DetailedForecastPage;

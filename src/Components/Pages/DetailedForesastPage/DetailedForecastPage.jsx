import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLocation } from '../../../Store/selectors/geoSelectors';
import HourlyWeatherItem from '../../HourlyWeatherItem/HourlyWeatherItem';
import { fetchUserLocationDetailedWeather } from './detailedForecastPageActions';
import { getHourlyWeather, getLoading } from './detailedForecastPageSelectors';
import Loader from '../../Loader/Loader';

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
      {location && (
        <h2>
          {location.city}, {location.country}
        </h2>
      )}
      {loading && <Loader />}
      {hourlyWeather &&
        hourlyWeather.map((hourlyItem, _index) => (
          <HourlyWeatherItem key={_index} hourly={hourlyItem} />
        ))}
    </div>
  );
}

export default DetailedForecastPage;

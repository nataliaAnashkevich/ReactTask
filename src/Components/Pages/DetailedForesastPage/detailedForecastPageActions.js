import { fetchUserGeoData } from '../../../Store/actions/geoActions';
import { getPosition } from '../../../Store/selectors/geoSelectors';
import { getHourlyWeather } from '../../../Api/weatherApi';

export const DETAILED_FORECAST_PAGE_ACTIONS = {
  USER_POSITION_DETAILED_WEATHER_REQUESTED: 'USER_POSITION_DETAILED_WEATHER_REQUESTED',
  USER_POSITION_DETAILED_WEATHER_RECEIVED: 'USER_POSITION_DETAILED_WEATHER_RECEIVED',
  USER_POSITION_DETAILED_WEATHER_FAILED: 'USER_POSITION_DETAILED_WEATHER_FAILED'
};

const userPositionDetailedWeatherRequested = () => ({
  type: DETAILED_FORECAST_PAGE_ACTIONS.USER_POSITION_DETAILED_WEATHER_REQUESTED
});

const userPositionDetailedWeatherReceived = ({ hourlyWeather }) => ({
  type: DETAILED_FORECAST_PAGE_ACTIONS.USER_POSITION_DETAILED_WEATHER_RECEIVED,
  payload: { hourlyWeather }
});

const userPositionDetailedWeatherFailed = ({ error }) => ({
  type: DETAILED_FORECAST_PAGE_ACTIONS.USER_POSITION_DETAILED_WEATHER_FAILED,
  payload: error
});

export const fetchUserLocationDetailedWeather = () => async (dispatch, getState) => {
  dispatch(userPositionDetailedWeatherRequested());

  try {
    await dispatch(fetchUserGeoData());
    const { longitude, latitude } = getPosition(getState());
    const hourlyWeather = await getHourlyWeather(longitude, latitude);
    dispatch(userPositionDetailedWeatherReceived({ hourlyWeather }));
  } catch (error) {
    dispatch(userPositionDetailedWeatherFailed(error));
  }
};

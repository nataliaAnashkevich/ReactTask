import initialState from './detailedForecastPageInitialState';
import { DETAILED_FORECAST_PAGE_ACTIONS } from './detailedForecastPageActions';

export const detailedForecastPageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DETAILED_FORECAST_PAGE_ACTIONS.USER_POSITION_DETAILED_WEATHER_REQUESTED:
      return {
        ...state,
        loading: true,
        error: null
      };
    case DETAILED_FORECAST_PAGE_ACTIONS.USER_POSITION_DETAILED_WEATHER_RECEIVED:
      return {
        ...state,
        loading: false,
        hourlyWeather: payload.hourlyWeather
      };
    case DETAILED_FORECAST_PAGE_ACTIONS.USER_POSITION_DETAILED_WEATHER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

export default detailedForecastPageReducer;

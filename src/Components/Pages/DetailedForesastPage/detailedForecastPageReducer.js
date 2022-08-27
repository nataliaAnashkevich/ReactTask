import initialState from './detailedForecastPageInitialState';
import { DETAILED_FORECAST_PAGE_ACTIONS } from './detailedForecastPageActions';
import produce from 'immer';

export const detailedForecastPageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DETAILED_FORECAST_PAGE_ACTIONS.USER_POSITION_DETAILED_WEATHER_REQUESTED:
      return produce(state, draft => {
        draft.loading = true;
        draft.error = null;
      })
    case DETAILED_FORECAST_PAGE_ACTIONS.USER_POSITION_DETAILED_WEATHER_RECEIVED:
      return produce(state, draft => {
        draft.loading = false;
        draft.hourlyWeather = payload.hourlyWeather;
      });
    case DETAILED_FORECAST_PAGE_ACTIONS.USER_POSITION_DETAILED_WEATHER_FAILED:
      return produce(state, draft => {
        draft.loading = false;
        draft.error = payload;
      });
    default:
      return state;
  }
};

export default detailedForecastPageReducer;

import initialState from './homePageInitialState';
import { HOMEPAGE_ACTIONS } from './homePageActions';
import produce from 'immer';

const homePageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HOMEPAGE_ACTIONS.USER_POSITION_WEATHER_REQUESTED:
      return produce(state, draft => {
        draft.loading = true;
        draft.error = null;
      });
    case HOMEPAGE_ACTIONS.USER_POSITION_WEATHER_RECEIVED:
      return produce(state, draft => {
        draft.loading = false;
        draft.currentWeather = payload.currentWeather;
      });
    case HOMEPAGE_ACTIONS.USER_POSITION_WEATHER_FAILED:
      return produce(state, draft => {
        draft.loading = false;
        draft.error = payload;
      });
    default:
      return state;
  }
};

export default homePageReducer;

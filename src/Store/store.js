import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import homePageReducer from '../Components/Pages/HomePage/homePageReducer';
import geoReducer from './reducers/geoReducer';
import detailedForecastPageReducer from '../Components/Pages/DetailedForesastPage/detailedForecastPageReducer';

const rootReducer = combineReducers({
  homePage: homePageReducer,
  detailedForecastPage: detailedForecastPageReducer,
  geoData: geoReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

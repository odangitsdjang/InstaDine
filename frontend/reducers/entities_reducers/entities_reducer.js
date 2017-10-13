import { combineReducers } from 'redux';
import reservationsReducer from './reservations_reducer';
import restaurantsReducer from './restaurants_reducer';

export default combineReducers({
  reservation: reservationsReducer,
  restaurants: restaurantsReducer
});
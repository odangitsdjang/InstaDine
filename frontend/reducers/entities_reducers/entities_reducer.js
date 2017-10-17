import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants_reducer';

export default combineReducers({
  restaurants: restaurantsReducer
});
import { combineReducers } from 'redux';
import reservationsReducer from './reservations_reducer';

export default combineReducers({
  reservation: reservationsReducer
});
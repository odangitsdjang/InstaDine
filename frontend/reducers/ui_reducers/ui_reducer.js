import { combineReducers } from 'redux';
import filterReducer from './filter_reducer';
import displayReducer from './display_reducer';

export default combineReducers({
  display: displayReducer,
  filter: filterReducer
});

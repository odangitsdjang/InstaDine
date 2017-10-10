import { combineReducers } from 'redux';
import navReducer from './nav_reducer';

const rootReducer = combineReducers({
  nav: navReducer
});

export default rootReducer;


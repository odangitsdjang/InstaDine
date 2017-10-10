import { combineReducers } from 'redux';
import navReducer from './nav_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  nav: navReducer,
  session: sessionReducer
});

export default rootReducer;


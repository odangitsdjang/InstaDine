import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import navReducer from './nav_reducers/nav_root_reducer';

const rootReducer = combineReducers({
  nav: navReducer,
  session: sessionReducer
});

export default rootReducer;


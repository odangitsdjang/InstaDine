import { combineReducers } from 'redux';
import navAppReducer from './nav_app_reducer';
import navHomeReducer from './nav_home_reducer';
import navAuthReducer from './nav_auth_reducer';

const navReducer = combineReducers({
  app: navAppReducer,
  auth: navAuthReducer,
  home: navHomeReducer
});

export default navReducer;

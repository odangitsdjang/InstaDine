import { combineReducers } from 'redux';
import navAppReducer from './nav_app_reducer';
import navHomeReducer from './nav_home_reducer';

const navReducer = combineReducers({
  app: navAppReducer,
  home: navHomeReducer
});

export default navReducer;

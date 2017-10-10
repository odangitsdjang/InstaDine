import { combineReducers } from 'redux';
import navReducer from './nav_reducers/nav_root_reducer';

const rootReducer = combineReducers({
  nav: navReducer
});

export default rootReducer;


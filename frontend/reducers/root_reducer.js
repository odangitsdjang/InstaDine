import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import SessionErrorReducer from './session_error_reducer';
import navReducer from './nav_reducers/nav_root_reducer';

const errors = combineReducers({
  session: SessionErrorReducer
});

const rootReducer = combineReducers({
  nav: navReducer,
  session: sessionReducer,
  errors
});

export default rootReducer;


import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import SessionErrorReducer from './session_error_reducer';
import navReducer from './nav_reducers/nav_root_reducer';
import entitiesReducer from './entities_reducers/entities_reducer';
import searchReducer from './search_reducer';
import displayReducer from './display_reducer';

const errors = combineReducers({
  session: SessionErrorReducer
});

const rootReducer = combineReducers({
  entities: entitiesReducer,
  nav: navReducer,
  display: displayReducer,
  session: sessionReducer,
  search: searchReducer,
  errors
});

export default rootReducer;


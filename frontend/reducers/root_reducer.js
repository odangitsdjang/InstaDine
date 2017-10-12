import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import navReducer from './nav_reducers/nav_root_reducer';
import entitiesReducer from './entities_reducers/entities_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  nav: navReducer,
  session: sessionReducer
});

export default rootReducer;


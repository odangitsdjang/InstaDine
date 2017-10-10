import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import rootReducer from '../reducers/root_reducer';

var _defaultState = {
  nav: {
    index: 0,
    routes: [{ key: 'Splash', routeName: 'Splash'}]
  }
};

export const configureStore = (initialState = _defaultState) => {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk, logger),
    autoRehydrate()
  ));
  persistStore(store, { storage: AsyncStorage });
  return store;
};
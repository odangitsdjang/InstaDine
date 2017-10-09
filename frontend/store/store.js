import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import rootReducer from '../reducers/root_reducer';

var defaultState = {
  todos: []
};

export const configureStore = (initialState = defaultState) => {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk, logger),
    autoRehydrate()
  ));
  persistStore(store, { storage: AsyncStorage });
  return store;

};
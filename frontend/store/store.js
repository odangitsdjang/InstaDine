import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate, purgeStoredState } from 'redux-persist';
import rootReducer from '../reducers/root_reducer';

var _defaultState = {
  nav: {
    app: {
      index: 0,
      routes: [{ key: 'Splash', routeName: 'Splash'}]
    },
    home: {
      index: 0,
      routes: [{ key: 'MapItem', routeName: 'MapItem' }]      
    }
  },
  session: {
    currentUser: null
  },
  errors: {
    session: null
  }
};

export const configureStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk, logger), 
    autoRehydrate()
  ));
<<<<<<< HEAD
  // persistStore(store, { storage: AsyncStorage }).purge();
  persistStore(store, { storage: AsyncStorage });
=======
  // persistStore(store, { storage: AsyncStorage });
  persistStore(store, { storage: AsyncStorage }).purge();
>>>>>>> 1696ac1f29251206db7c767f399d8fa40d5be35d
  return store;
};
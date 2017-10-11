import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './frontend/store/store';
import AppWithNavigationState from './frontend/navigators/AppNavigator';
import { AppRegistry } from 'react-native';

<<<<<<< HEAD
import HomePage from './frontend/components/home/HomePage';
import RestaurantContainer from './frontend/components/restaurant/RestaurantContainer';
=======
>>>>>>> c99f1d2e81ab927371c5210e411b91ce18c0f824
class Root extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <AppWithNavigationState/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('InstaDine', () => Root);

export default Root;
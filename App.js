import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './frontend/store/store';
import AppWithNavigationState from './frontend/navigators/AppNavigator';
import { AppRegistry } from 'react-native';

class Root extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('InstaDine', () => Root);

export default Root;
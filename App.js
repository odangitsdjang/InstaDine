import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
// import Main from './frontend/main';
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
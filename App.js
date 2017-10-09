import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Main from './frontend/main';
import { configureStore } from './frontend/store/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Main/>
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

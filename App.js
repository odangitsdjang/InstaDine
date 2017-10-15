import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './frontend/store/store';
import AppWithNavigationState from './frontend/navigators/AppNavigator';
import { AppRegistry, Platform } from 'react-native';
import {
  setCustomView,
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity
} from 'react-native-global-props';

const customTextProps = {
  style: {
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'AppleSDGothicNeo-Regular' : 'Roboto',
    color: 'black'
  }
};


class Root extends React.Component {
  render() {
    setCustomText(customTextProps);
    return (
      <Provider store={configureStore()}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('InstaDine', () => Root);

export default Root;
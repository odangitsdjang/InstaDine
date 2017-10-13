//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeWithNavigationState from '../../navigators/HomeNavigator';

// create a component
class HomePage extends Component {
  render() {
    return (
      <HomeWithNavigationState />
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  }
});

//make this component available to the app
export default HomePage;

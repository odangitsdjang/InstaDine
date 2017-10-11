<<<<<<< HEAD
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import MapItem from './MapItem';

const mapStateToProps = (state, ownProps) => ({
  // markers: state.entities.markers
  nav: state.nav
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  goToRestaurant: addNavigationHelpers({ dispatch, state: ownProps.nav })
  
});

export default connect(mapStateToProps, mapDispatchToProps)(MapItem);
=======
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
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default HomePage;
>>>>>>> c99f1d2e81ab927371c5210e411b91ce18c0f824

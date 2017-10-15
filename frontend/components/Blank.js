import { connect }  from 'react-redux';
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

// Blank screen for initial load before checking if current user exists
class Blank extends Component {
  componentDidMount() {
    // Check if current user exsits and re-route
    if (this.props.token) {
      this.props.navigation.navigate('HomeTab');
    }
    else { 
      this.props.navigation.navigate('AuthTab'); 
    }
    this.props.navigation.navigate('Splash');
  }

  render() {
    return <View style={styles.container}></View>;
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

const mapStateToProps = state => ({
  token: state.session.token
});

connect(mapStateToProps)(Blank);

export default Blank;
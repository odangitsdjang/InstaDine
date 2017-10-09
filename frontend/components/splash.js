//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Splash extends Component {
  static navigationOptions = {
    title: 'InstaDine'
  };

  render() {
    const { navigate }
    return (
      <View style={styles.container}>
        <Text>Splash</Text>
      </View>
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
export default Splash;

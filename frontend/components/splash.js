//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.loginBtn = this.loginBtn.bind(this);
  }

  loginBtn() {
    this.props.navigation.dispatch({ type: 'Login' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to InstaDine</Text>
        <Button 
          onPress={this.loginBtn}
          title='Log In'/>
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

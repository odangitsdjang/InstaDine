//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Splash extends Component {
  constructor(props) {
    super(props);
    this.redirectLogin = this.redirectLogin.bind(this);
    this.redirectSignup = this.redirectSignup.bind(this);
  }

  redirectLogin() {
    this.props.navigation.dispatch({ type: 'Login' });
  }

  redirectSignup() {
    this.props.navigation.dispatch({ type: 'Signup' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to InstaDine</Text>
        <Button 
          onPress={this.redirectLogin}
          title='Log In'/>
        <Button
          onPress={this.redirectSignup}
          title='Sign Up'/>
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

export default Splash;
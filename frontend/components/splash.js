//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Splash extends Component {
  constructor(props) {
    super(props);
    this.redirectLogin = this.redirectLogin.bind(this);
    this.redirectSignup = this.redirectSignup.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  redirectLogin() {
    this.props.navigation.dispatch({ type: 'Login' });
  }

  redirectSignup() {
    this.props.navigation.dispatch({ type: 'Signup' });
  }

  handleDemo() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>InstaDine</Text>
        <View style={styles.authButtons}>
          <Button 
            onPress={this.redirectLogin}
            title='Log In'
            style={styles.button}/>
            
          <Button
            onPress={this.redirectSignup}
            title='Sign Up'
            style={styles.button}/>
        </View>

        <Button
          onPress={this.handleDemo}
          title='Demo'
          style={styles.button}/>
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
    backgroundColor: 'white',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
  },
  authButtons: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    flex: 1,
    padding: 10,
    fontSize: 12
  }
});

export default Splash;
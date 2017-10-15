import React, { Component } from 'react';
import { View, 
  Text, 
  StyleSheet, 
  Button,
  TouchableOpacity
} from 'react-native';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.redirectLogin = this.redirectLogin.bind(this);
    this.redirectSignup = this.redirectSignup.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  redirectLogin() {
    this.props.navigation.navigate('Login');
  }

  redirectSignup() {
    this.props.navigation.navigate('Signup');    
  }

  handleDemo() {
    let user = {
      email: 't@t.com',
      password: 't'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>InstaDine</Text>
        <View style={styles.authButtons}>
          <TouchableOpacity
            onPress={this.redirectLogin}
            style={styles.button}
            raised={true}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.redirectSignup}
            style={styles.button}
            raised={true}>
            <Text style={styles.text}>Signup</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={this.handleDemo}
          style={styles.button}
          raised={true}>
          <Text style={styles.text}>Demo</Text>
        </TouchableOpacity>

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
    backgroundColor: '#65CCB8',
    flexDirection: 'column'
  },
  title: {
    fontSize: 40,
    padding: 30
  },
  authButtons: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F2F2F2'
  },
  text: {
    color: 'white'
  }
});

export default Splash;

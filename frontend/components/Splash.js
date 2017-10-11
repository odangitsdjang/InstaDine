//import liraries
import React, { Component } from 'react';
import { View, 
  Text, 
  StyleSheet, 
  Button,
  TouchableOpacity
} from 'react-native';

// create a component
class Splash extends Component {
  constructor(props) {
    super(props);
    this.redirectLogin = this.redirectLogin.bind(this);
    this.redirectSignup = this.redirectSignup.bind(this);
    this.redirectHome = this.redirectHome.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  redirectLogin() {
    this.props.navigation.dispatch({ type: 'Login' });
  }

  redirectSignup() {
    this.props.navigation.dispatch({ type: 'Signup' });
    
  }

  redirectHome() { 
    this.props.navigation.dispatch({ type: 'HomePage' });
  }

  handleDemo() {

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
            <View>
              <Text style={styles.text}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.redirectSignup}
            style={styles.button}
            raised={true}>
            <View>
              <Text style={styles.text}>Signup</Text>
            </View>
          </TouchableOpacity>
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
    flexDirection: 'column'
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
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
    backgroundColor: '#2c3e50'
  },
  text: {
    color: 'white'
  }
});

export default Splash;

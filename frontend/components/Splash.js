import React, { Component } from 'react';
import { View, 
  Text, 
  StyleSheet, 
  Button,
  TouchableOpacity, 
  Image
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
      <Image source={require('../../assets/images/splash.jpg')} style={styles.container}>
        <View style={{flex: 7, justifyContent: 'center'}} >

          <Image source={require('../../assets/images/logo.png')}
               style={{ width: 250, height: 250, alignSelf: 'center' }}
          />
        </View>
        <View style={{ flex: 3, justifyContent: 'flex-start', alignItems: 'center'}}>
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

      </Image>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  splash: {
    top: 0,
    left: 0,
    position: 'absolute',
    
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

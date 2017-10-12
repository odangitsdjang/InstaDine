//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,
         TextInput,
         Alert } from 'react-native';

// create a component
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.redirectBack = this.redirectBack.bind(this);
    this.redirectHomePage = this.redirectHomePage.bind(this);
    this.update = this.update.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(newProps){
    if(this.props.errors !== newProps.errors){
      this.errors = newProps.errors;
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.nativeEvent.text
    });
  }

  onLogin() {
    this.props.loginUser(this.state);
    this.redirectHomePage = this.redirectHomePage.bind(this);
  }

  redirectBack() {
    this.props.navigation.dispatch({ type: 'NAVIGATION/BACK' });
  }

  redirectHomePage() {
    this.props.navigation.dispatch({ type: 'HomePage' });
  }

  renderErrors(){
    if(this.errors){
      Alert.alert(
        this.errors
      );
    }
  }

  render() {
    let {email, password} = this.state;

    return (
      <View style={styles.container}>
        <Text>This is the Login page</Text>
        {this.renderErrors()}
        <View style={styles.loginForm}>
          <Text style={styles.fieldTitle}>Email:</Text>
          <View style={styles.field}>
            <TextInput
              onChange={this.update('email')}
              style={styles.textInput}
              value={email}
              placeholder="Email" />
          </View>

          <Text style={styles.fieldTitle}>Password:</Text>
          <View style={styles.field}>
            <TextInput
              onChange={this.update('password')}
              style={styles.textInput}
              value={password}
              secureTextEntry={true}
              placeholder="Password" />
          </View>
        </View>

        <Button
          onPress={this.onLogin}
          title='Log In' />

        <Button
          onPress={this.redirectBack}
          title='Back' />
          
        <Button
          onPress={this.redirectHomePage}
          title='Home' />
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
  errorText:{
    color: 'red',
    fontSize: 30
  },
  field: {
    borderRadius: 5,
    padding: 5,
    paddingLeft: 8,
    margin: 7,
    width: 200,
    marginTop: 0,
    backgroundColor: 'white'
  },
  textInput: {
    height: 26
  },
  fieldTitle: {
    paddingLeft: 0,
    padding: 6,
    fontSize: 20,
    color: 'white'
  }
});

//make this component available to the app
export default Login;

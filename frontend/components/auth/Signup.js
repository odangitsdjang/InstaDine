//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,
         TextInput,
         Alert } from 'react-native';

// create a component
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      phoneNumber: "",
      username: ""
    };

    this.redirectBack = this.redirectBack.bind(this);
    this.update = this.update.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.nativeEvent.text
    });
  }

  onSignUp() {
    this.props.signupUser(this.state);
  }

  redirectBack() {
    this.props.navigation.dispatch({ type: 'NAVIGATION/BACK' });
  }

  componentWillReceiveProps(newProps) {
    if (this.props.errors !== newProps.errors) {
      this.errors = newProps.errors;
    }
  }

  renderErrors() {
    if (this.errors) {
      this.errors = this.errors.slice(24,-1);
      Alert.alert(
        this.errors
      );
      this.props.removeAlert();
    }
  }

  render() {
    let {email, password, phoneNumber, username} = this.state;
    return (
      <View style={styles.container}>
        <Text>This is the Sign Up page</Text>
        {this.renderErrors()}
        <View style={styles.signUpForm}>
          <Text style={styles.fieldTitle}>Email:</Text>
          <View style={styles.field}>
            <TextInput 
              onChange={this.update('email')}
              style={styles.textInput}
              value={email}
              placeholder="Email"/>
          </View>

          <Text style={styles.fieldTitle}>Username:</Text>
          <View style={styles.field}>
            <TextInput
              onChange={this.update('username')}
              style={styles.textInput}
              value={username}
              placeholder="Username" />
          </View>

          <Text style={styles.fieldTitle}>Password:</Text>
          <View style={styles.field}>
            <TextInput 
              onChange={this.update('password')}
              style={styles.textInput}
              value={password}
              secureTextEntry={true}
              placeholder="Password"/>
          </View>

          <Text style={styles.fieldTitle}>Phone Number:</Text>
          <View style={styles.field}>
            <TextInput
              onChange={this.update('phoneNumber')}
              style={styles.textInput}
              value={phoneNumber}
              placeholder="Phone Number" />
          </View>
        </View>

        <Button
          onPress={this.onSignUp}
          title='Sign Up' />
        <Button
          onPress={this.redirectBack}
          title='Back' />
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
    backgroundColor: '#2c3e50'
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
export default Signup;

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,
         TextInput,
         Alert,
         ScrollView,
         TouchableOpacity } from 'react-native';

const _defaultState = {
  email: '',
  password: ''
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = _defaultState;

    this.redirectBack = this.redirectBack.bind(this);
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
    this.props.loginUser(this.state).then(response => {
      debugger;
      if (response === 'success') {
        () => this.setState(_defaultState);
      }
    });
  }

  redirectBack() {
    this.props.navigation.navigate('Splash');
    this.setState(_defaultState);
  }

  renderErrors(){
    if(this.errors){
      Alert.alert(
        this.errors
      );
      this.props.removeAlert();
    }
  }

  render() {
    let {email, password} = this.state;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <Text style={{fontSize: 30, color: '#182628'}}>Please Log In</Text>
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

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={this.onLogin}
              style={styles.button}
              raised={true}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.redirectBack}
              style={styles.button}
              raised={true}>
              <Text style={styles.text}>Back</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    backgroundColor: '#65CCB8'
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
  errorText:{
    color: 'red',
    fontSize: 30
  },
  scrollContainer: {
    paddingTop: 200
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
  },
  text: {
    color: 'white'
  }
});

export default Login;

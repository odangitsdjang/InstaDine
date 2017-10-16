import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,
         TextInput,
         Alert,
         ScrollView,
         TouchableOpacity, 
         Keyboard, 
         TouchableWithoutFeedback,
         KeyboardAvoidingView } from 'react-native';

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
    Keyboard.dismiss();
    this.props.loginUser(this.state).then(response => {
      if (response === 'success') {
        () => this.setState(_defaultState);
      }
    });
  }

  redirectBack() {
    Keyboard.dismiss();
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

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <View style={{ flex: 3, justifyContent: 'flex-end' }} >
              <Text style={styles.logIn}>Log In</Text>
            </View>
            <KeyboardAvoidingView behavior='padding' style={{ flex: 7, justifyContent: 'flex-start', alignItems: 'center' }}>
              <View>
                <Text style={styles.fieldTitle}>Email:</Text>
                <View style={styles.field}>

                  <TextInput
                    onChange={this.update('email')}
                    style={styles.textInput}
                    returnKeyType={"next"}
                    autoCorrect={false}
                    onSubmitEditing={(e) => { this.refs.pw.focus(); }}
                    value={email}
                    placeholder="Email" />
                </View>

                <Text style={styles.fieldTitle}>Password:</Text>
                <View style={styles.field}>
                  <TextInput
                    ref='pw'
                    onChange={this.update('password')}
                    style={styles.textInput}
                    onSubmitEditing={(e)=> this.onLogin() }
                    value={password}
                    secureTextEntry={true}
                    placeholder="Password" />
                </View>
              </View>
              <View style={styles.authButtons}>
                <TouchableOpacity
                  onPress={this.redirectBack}
                  style={styles.backButton}
                  raised={true}>
                  <Text style={styles.text}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={this.onLogin}
                  style={styles.logInButton}
                  raised={true}>
                  <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
            {this.renderErrors()}
          </View>
      </TouchableWithoutFeedback>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1392B5'
  },
  logIn: {
    fontSize: 40, 
    fontFamily: 'AppleSDGothicNeo-Bold', 
    color: 'white'
  },
  backButton: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F2F2F2',
  },
  logInButton: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F2F2F2',
    backgroundColor: '#1CA821'
  },
  authButtons: {
    justifyContent: 'space-around',
    flexDirection: 'row'
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
  },
  text: {
    color: 'white'
  }
});

export default Login;

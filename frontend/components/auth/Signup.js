//import liraries
import React, { Component } from 'react';
import { ImagePicker } from 'expo';
import { View, Text, StyleSheet, Button,
         TextInput,
         Alert,
         Image,
         ScrollView,
         TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';

// create a component
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      phoneNumber: "",
      username: "",
      image: 'http://res.cloudinary.com/jerryzlau/image/upload/v1507858335/account_friend_human_man_member_person_profile_user_users-256_ovxp2a.png'
    };

    this.redirectBack = this.redirectBack.bind(this);
    this.update = this.update.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this._pickImage = this._pickImage.bind(this);
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    // console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  update(field) {
    return e => this.setState({
      [field]: e.nativeEvent.text
    });
  }

  onSignUp() {
    this.props.signupUser(this.state);
  }

  redirectBack() {
    this.props.navigation.navigate('Splash');
  }

  componentWillReceiveProps(newProps) {
    if (this.props.errors !== newProps.errors) {
      this.errors = newProps.errors;
    }
  }

  renderErrors() {
    if (this.errors) {
      Alert.alert(
        this.errors
      );
      this.props.removeAlert();
    }
  }

  render() {
    let {email, password, phoneNumber, username, image} = this.state;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }} >
              <Text style={styles.logIn}>Log In</Text>
            </View>
            {this.renderErrors()}
            start changing down here
            <View style={styles.signUpForm}>
              <Text style={styles.fieldTitle}>Email:</Text>
              <View style={styles.field}>
                <TextInput 
                  onChange={this.update('email')}
                  style={styles.textInput}
                  value={email}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  onSubmitEditing={(e) => { this.refs.username.focus(); }}
                  placeholder="Email"/>
              </View>

              <Text style={styles.fieldTitle}>Username:</Text>
              <View style={styles.field}>
                <TextInput
                  ref='username'
                  onChange={this.update('username')}
                  style={styles.textInput}
                  value={username}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  onSubmitEditing={(e) => { this.refs.password.focus(); }}
                  placeholder="Username" />
              </View>

              <Text style={styles.fieldTitle}>Password:</Text>
              <View style={styles.field}>
                <TextInput 
                  ref='password'
                  onChange={this.update('password')}
                  style={styles.textInput}
                  value={password}
                  returnKeyType={"next"}
                  onSubmitEditing={(e) => { this.refs.phone.focus(); }}
                  secureTextEntry={true}
                  placeholder="Password"/>
              </View>

              <Text style={styles.fieldTitle}>Phone Number:</Text>
              <View style={styles.field}>
                <TextInput
                  ref='phone'
                  onChange={this.update('phoneNumber')}
                  keyboardType='numeric'
                  style={styles.textInput}
                  value={phoneNumber}
                  onSubmitEditing={(e) => this.onSignUp()}
                  maxLength={10}
                  placeholder="Phone Number" />
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={this.redirectBack}
                style={styles.button}
                raised={true}>
                <Text style={styles.text}>Back</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={this.onSignUp}
                style={styles.button}
                raised={true}>
                <Text style={styles.text}>Sign Up</Text>
              </TouchableOpacity>


            </View>
        </View>
      </TouchableWithoutFeedback>
    );


    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }} >
          <Text style={styles.logIn}>Log In</Text>
        </View>
        <View style={{ flex: 7, justifyContent: 'flex-start', alignItems: 'center' }}>
          <View style={styles.loginForm}>
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
                onSubmitEditing={(e) => this.onLogin()}
                value={password}
                secureTextEntry={true}
                placeholder="Password" />
            </View>
          </View>
          <View style={styles.authButtons}>
            <TouchableOpacity
              onPress={this.redirectBack}
              style={styles.button}
              raised={true}>
              <Text style={styles.text}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.onLogin}
              style={styles.button}
              raised={true}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.renderErrors()}
      </View>
    </TouchableWithoutFeedback>
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
  scrollContainer:{
    paddingTop: 100
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
  userProfile: {
    width: 120,
    height: 120
  },
  textInput: {
    height: 26,

  },
  fieldTitle: {
    paddingLeft: 0,
    padding: 6,
    color: 'white'
  },
  text: {
    color: 'white'
  }
});

//make this component available to the app
export default Signup;

//import liraries
import React, { Component } from 'react';
import { ImagePicker } from 'expo';
import { View, Text, StyleSheet, Button,
         TextInput,
         Alert,
         Image,
         ScrollView,
         TouchableOpacity,
         Keyboard, 
         TouchableWithoutFeedback, 
         KeyboardAvoidingView } from 'react-native';

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
    Keyboard.dismiss();
    this.props.signupUser(this.state);
  }

  redirectBack() {
    Keyboard.dismiss();
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
      <Image source={{ uri: 'http://res.cloudinary.com/odangitsdjang/image/upload/v1508151530/splash_gx74sa.jpg' }} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <View style={{ flex: 2, justifyContent: 'flex-end' }} >
              <Text style={styles.signUp}>Sign Up</Text>
            </View>
            {this.renderErrors()}
            
            <KeyboardAvoidingView behavior='padding' style={{ flex: 8, justifyContent: 'flex-start', alignItems: 'center' }}>
              <View>
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
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity
                  onPress={this.redirectBack}
                  style={styles.backButton}
                  raised={true}>
                  <Text style={styles.text}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={this.onSignUp}
                  style={styles.signUpButton}
                  raised={true}>
                  <Text style={styles.text}>Sign Up</Text>
                </TouchableOpacity>
              </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
      </Image>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  signUp: {
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
    backgroundColor: '#677573'
  },
  signUpButton: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F2F2F2',
    backgroundColor: '#273B38'
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
    fontSize: 20,
    color: 'white'
  },
  text: {
    color: 'white'
  }
});

//make this component available to the app
export default Signup;

//import liraries
import React, { Component } from 'react';
import { View, 
         Text, 
         StyleSheet,
         Image } from 'react-native';

// create a component
class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { email, 
          phoneNumber, 
          profilePicture, 
          properties, 
          username } = this.props.user;

    return (
      <View style={styles.container}>
        <Text>UserProfile</Text>
        <Image 
          source={{uri: profilePicture}}
          style={styles.profilePicture} />
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
  profilePicture: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50
  }
});

//make this component available to the app
export default UserProfile;

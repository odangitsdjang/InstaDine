//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


// create a component
class UserProfile extends Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  handleLogout() {
    this.props.logoutUser();
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handleLogout}
        title='Logout'/>
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
});

//make this component available to the app
export default UserProfile;

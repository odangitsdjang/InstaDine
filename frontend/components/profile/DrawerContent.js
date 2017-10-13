//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation';

// create a component
class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.redirectEditProfile = this.redirectEditProfile.bind(this);
  }
  componentDidMount() {
    console.log(this.props);
  }

  redirectEditProfile() {
    this.props.navigation.navigate('Map');
  }

  redirectHistory() {
    // this.props.navigation.navigate('');
  }

  
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>This is the drawer</Text>
        <DrawerItems {...this.props}/>
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
export default DrawerContent;

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerItems } from 'react-navigation';

class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      profilePicture: 'https://res.cloudinary.com/jerryzlau/image/upload/v1507858335/account_friend_human_man_member_person_profile_user_users-256_ovxp2a.png'
    };
  }
  
  componentWillReceiveProps(newProps) {
    if (newProps.session.token && (!this.props.session.token) || 
      (newProps.session.token !== this.props.session.token)){
        this.setState({profilePicture: newProps.session.currentUser.profilePicture});
    }
  }

  render() {
    console.log(this.state.profilePicture);
    return (
      <View style={styles.container}>
      <View>
        <Image
          source={{uri: this.state.profilePicture}}
          style={{width:50, height: 50}}/>
      </View> 
        <DrawerItems {...this.props}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default DrawerContent;

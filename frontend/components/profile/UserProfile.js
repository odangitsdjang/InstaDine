//import liraries
import React, { Component } from 'react';
import { View, 
         Text, 
         StyleSheet,
         Image,
         Button } from 'react-native';

// create a component
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(){
    this.props.logoutUser();
  }

  render() {
    if(this.props.user){
      let { email, 
            phoneNumber, 
            profilePicture, 
            properties, 
            username } = this.props.user;
  
      return (
        <View style={styles.container}>
          <View style={[styles.boxContainer, styles.profileHeader]}>
            <Text style={styles.profileTitle}>User Profile</Text>
          </View>
  
          <View style={[styles.boxContainer, styles.userInfo]}>
            <Image 
              source={{uri: profilePicture}}
              style={styles.userProfile}/>
            <View style={styles.userInfoDetails}>
              <Text style={{fontSize: 30}}>{username}</Text>
              <Text>{email}</Text>
              <Text>{phoneNumber}</Text>
            </View>
          </View>
  
          <View style={[styles.boxContainer, styles.reservation]}>
            <Text>reservation</Text>
          </View>
  
          <View style={[styles.boxContainer, styles.pastReservations]}>
            <Text>past rservation</Text>
          </View>
  
          <View style={[styles.boxContainer, styles.logout]}>
            <Button
              onPress={this.onLogout}
              title='Log out' />
          </View>
        </View>
      );
    }else{
      return(
        <View style={styles.container}>
          <View style={styles.notLoggedOnContainer}>
            <Text style={styles.notLoggedOn}>
              Oops! You are not logged on</Text>
          </View>
        </View>
      );
    }
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  notLoggedOn: {
    color: 'red',
    fontSize: 40
  },
  notLoggedOnContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userProfile: {
    width: 120,
    height: 120
  },
  userInfoDetails:{
    flexDirection: 'column'
  },
  profileTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  profileHeader: {
    backgroundColor: 'orange'
  },
  userInfo: {
    flex: 2,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'red'
  },
  reservation: {
    flex: 2,
    backgroundColor: 'blue'
  },
  pastReservations: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  logout: {
    backgroundColor: 'black'
  },

});

//make this component available to the app
export default UserProfile;

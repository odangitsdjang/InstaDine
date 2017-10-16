import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { DrawerItems } from 'react-navigation';

class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      profilePicture: 'https://res.cloudinary.com/jerryzlau/image/upload/v1507858335/account_friend_human_man_member_person_profile_user_users-256_ovxp2a.png'
    };
    this.signoutUser = this.signoutUser.bind(this);
  }
  
  componentWillReceiveProps(newProps) {
    if (newProps.session.token && ((!this.props.session.token) || 
      (newProps.session.token !== this.props.session.token))){
        this.setState({profilePicture: newProps.session.currentUser.profilePicture});
    }
  }

  signoutUser() {
    this.props.navigation.navigate('DrawerClose');
    this.props.signout();
  }

  render() {
    let username;
    if (this.props.session.currentUser) {
      username = this.props.session.currentUser.username;
    }

    return (
      <View style={styles.container}>
        <View style={styles.userProfile}>
          <Image
            source={{uri: this.state.profilePicture}}
            style={{width:100, height: 100, alignSelf: 'center'}}/>
          
          <Text style={styles.userText}>{`Hello ${username}!`}</Text>
        </View> 

        <View style={styles.drawerContent}>
          <DrawerItems {...this.props} />
        </View>

        <View style={styles.signout}>
          <TouchableOpacity onPress={this.signoutUser}>
            <Text style={styles.signoutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
<<<<<<< HEAD
    backgroundColor: 'white',
    padding: 0
  },
  userProfile: {
    margin: 20,
    position: 'absolute',
    top: height * 0.005,
    alignSelf: 'center'
  },
  drawerContent: {
    marginTop: 20,
    marginBottom: 20,
    width: width * 0.55,
    justifyContent: 'center',
    padding: 0,
    alignSelf: 'center',
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  signout: {
    margin: 20,
    position: 'absolute',
    backgroundColor: 'rgba(253, 39, 39, 0.71)',
    bottom: height * 0.002,
    padding: 10,
    borderRadius: 5,
    width: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#F2F2F2'
  },
  signoutText: {
    color: 'white',
    alignSelf: 'center'
  },
  userText: {
    margin: 20,
    fontSize: 17,
    alignSelf: 'center'
  },
  drawerItems: {
    borderWidth: 1,
    borderColor: 'black'
=======
    alignItems: 'center',
    backgroundColor: '#4C5B61',
>>>>>>> dcd573389af4f2746cc2270a1860a0dab8f84f7b
  },
});

export default DrawerContent;

//import liraries
import React, { Component } from 'react';
import { ImagePicker } from 'expo';
import { View, 
         Text, 
         StyleSheet,
         Image,
         Button,
         ScrollView } from 'react-native';

// create a component
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.dummy_reservation = {
      restaurant_id: "23123",
      user_id: "59de505ebee09a4562550b76",
      count: 3,
      restaurantName: 'Omekase',
      timestamp: new Date().toDateString(),
      status: 'Seated'
    };

    this.state = {
      image: 'https://res.cloudinary.com/jerryzlau/image/upload/v1507858335/account_friend_human_man_member_person_profile_user_users-256_ovxp2a.png'
    };

    this.onLogout = this.onLogout.bind(this);
    this.upComingReservation = this.upComingReservation.bind(this);
    this._pickImage = this._pickImage.bind(this);
    this.pastReservation = this.pastReservation.bind(this);
  }

  componentDidMount(){
    if(this.props.user){
      this.setState({
        image: this.props.user.profilePicture
      });
    };
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }

    let user = { 
      profilePicture: 'https://res-1.cloudinary.com/cloudinary/image/asset/upload_widget_main-0d7f36bcac005868a51815763886aa65.jpg'
    }; 

    this.props.updateUser(user, this.props.userToken);
  };

  onLogout(){
    this.props.logoutUser();
  }

  upComingReservation(){
    if(this.dummy_reservation){
      let { restaurant_id,
        user_id,
        count,
        timestamp,
        restaurantName,
        status } = this.dummy_reservation;
  
      return(
        <View style={[styles.boxContainer, styles.reservation]}>
          <Text style={{ fontSize: 28 }}>Upcoming Reservations</Text>
          <Text style={{fontSize: 20}}>{restaurantName}</Text>
          <Text style={{ fontSize: 20 }}>{timestamp}</Text>
        </View>
      );
    }else{
      return(
        <View style={[styles.boxContainer, styles.reservation]}>
          <Text style={{ fontSize: 28 }}>Upcoming Reservations</Text>
          <Text>No upcoming reservation!</Text>
        </View>
      );
    }
  }

  pastReservation(){
    if (this.dummy_past_reservation) {
      let { restaurant_id,
        user_id,
        count,
        timestamp,
        restaurantName,
        status } = this.dummy_reservation;

      return (
        <ScrollView
          decelerationRate={0}
          snapToInterval={200} //your element width
          snapToAlignment={"center"}
        >
          <Text style={{ fontSize: 20 }}>pastReservation</Text>
          <Text style={{ fontSize: 20 }}>pastReservation</Text>
          <Text style={{ fontSize: 20 }}>pastReservation</Text>
        </ScrollView>
      );
    } else {
      return (
        <Text style={{ fontSize: 20 }}>
          No past reservations
        </Text>
      );
    }
  }

  render() {
    if(this.props.user){
      let { email, 
            phoneNumber, 
            properties, 
            username } = this.props.user;
  
      return (
        <View style={styles.container}>
          <View style={[styles.boxContainer, styles.profileHeader]}>
            <Text style={styles.profileTitle}>User Profile</Text>
          </View>
  
          <View style={[styles.boxContainer, styles.userInfo]}>
            <Image 
              source={{uri: this.state.image}}
              style={styles.userProfile}/>
            <View style={styles.userInfoDetails}>
              <Text style={{fontSize: 30}}>{username}</Text>
              <Text style={styles.regularFont}>{email}</Text>
              <Text style={styles.regularFont}>{phoneNumber}</Text>
              <Button
                title="Update user profile picture"
                onPress={this._pickImage}
              />
            </View>
          </View>
  
          {this.upComingReservation()}
  
          <View style={[styles.boxContainer, styles.pastReservations]}>
            <Text style={{ fontSize: 28 }}>Past Reservations</Text>
            {this.pastReservation()}
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
  regularFont: {
    fontFamily: 'Georgia'
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
    fontWeight: 'bold',
    fontFamily: 'Chalkboard SE'
  },
  profileHeader: {
    backgroundColor: 'orange'
  },
  userInfo: {
    flex: 2,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  reservation: {
    flex: 2,
    backgroundColor: 'green'
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

const CLOUDINARY_UPLOAD_PRESET = 'cginlt5t';
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/odangitsdjang/image/upload";

//import liraries
import React, { Component } from 'react';
import request from 'superagent';
import { ImagePicker } from 'expo';
import { View, 
         Text, 
         StyleSheet,
         Image,
         Button,
         ScrollView,
         TouchableOpacity } from 'react-native';

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
    this.upcomingReservation = this.upcomingReservation.bind(this);
    this._pickImage = this._pickImage.bind(this);

    this.pastReservation = this.pastReservation.bind(this);
  }

  componentDidMount(){
    if(this.props.user){
      this.setState({
        image: this.props.user.profilePicture
      });
    }
    this.redirectHome = this.redirectHome.bind(this);
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      // this.setState({ image: result.uri });

      //upload picture to cloudinary 
      let upload = request.post(CLOUDINARY_UPLOAD_URL)
                          .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                          .field('file', '../../../docs/signup.png');

      upload.end((err, response) => {
        if(err){
          console.log(err);
          return;
        }

        if(response.body.secure_url !== ''){
          let secureUrl = response.body.secure_url;
          this.setState({
            image: response.body.secure_url
          });
        }
      });
    }

    let user = { 
      profilePicture: 'https://res-1.cloudinary.com/cloudinary/image/asset/upload_widget_main-0d7f36bcac005868a51815763886aa65.jpg'
    }; 

    this.props.updateUser(user, this.props.userToken);
  };

  onLogout(){
    this.props.logoutUser();
    this.props.navigation.navigate('Map');
  }

  upcomingReservation(){
    // console.log(this.props.reservation);
    if(this.props.reservation){
      // console.log(this.props.reservation);
      let { restaurant_id,
        user_id,
        datetime,
        name,
        status } = this.props.reservation;
      const restaurant = this.props.restaurants[restaurant_id];
      return(
        <View style={[styles.boxContainer, styles.reservation]}>
          <Text style={{ fontSize: 28 }}>Upcoming Reservations</Text>
          <Text style={{fontSize: 20}}>{restaurant.name} @ </Text>
          <Text style={{ fontSize: 20 }}>{datetime.slice(11, 16)}</Text>
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
    
  redirectHome() {
    this.props.navigation.navigate('Map');
  }

  render() {
    if(this.props.user){
      let { email, 
            phoneNumber, 
            properties, 
            username } = this.props.user;
  
      return (
        <View style={styles.container}>
          <View style={[styles.boxContainerHeader, styles.profileHeader]}>
            <Text style={styles.profileTitle}>{username}</Text>
          </View>
  
          <View style={[styles.boxContainer, styles.userInfo]}>
            <View style={styles.pictureComponent}>
              <Image 
                source={{ uri: 'https://res.cloudinary.com/jerryzlau/image/upload/v1507858335/account_friend_human_man_member_person_profile_user_users-256_ovxp2a.png'}}
                style={styles.userProfile}/>
              {/* <TouchableOpacity
                style={{padding: 5, 
                        borderWidth: 2,
                        borderColor: 'black',
                        borderRadius: 5,
                        marginTop: 10}}
                onPress={this._pickImage}>
                <Text style={{color: 'black', 
                              fontSize: 15}}>Change Profile</Text>
              </TouchableOpacity> */}

            </View>
            <View style={styles.userInfoDetails}>

              <Text style={styles.regularFont}>{email}</Text>
              <Text style={styles.regularFont}>{phoneNumber}</Text>
            </View>
          </View>
  
          {/* {this.upcomingReservation()} */}
  
          <View style={[styles.boxContainer, styles.pastReservations]}>
            <Text style={{ fontSize: 28 }}>Past Reservations</Text>
            {this.pastReservation()}
          </View>
  
          <View style={[styles.boxContainer, styles.logout]}>
            <TouchableOpacity
              onPress={this.onLogout}
              style={styles.button}
              raised={true}>
              <Text style={{ color: 'black'}}>Log Out</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.redirectHome}
              style={styles.button}
              raised={true}>
              <Text style={{ color: 'black' }}>Back</Text>
            </TouchableOpacity>

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
    // backgroundColor: '#5CDB95',
    paddingBottom: 30,
    backgroundColor: 'white',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    // borderColor: '#F2F2F2'
    borderColor: 'black'
  },
  boxContainerHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 30
  },
  pictureComponent:{
    flexDirection: 'column'
  },
  regularFont: {
    fontFamily: 'Chalkboard SE',
    fontSize: 20
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
    height: 120,
    borderRadius: 10
  },
  userInfoDetails:{
    flexDirection: 'column'
  },
  profileTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Chalkboard SE',
    color: 'white'
  },
  profileHeader: {
    paddingTop: 15,
    backgroundColor: '#4C5B61'
  },
  userInfo: {
    flex: 2,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  reservation: {
    flex: 2,
    // backgroundColor: '#379683'
  },
  pastReservations: {
    flex: 3,
    // backgroundColor: '#379683'
  },
  logout: {
    // backgroundColor: '#379683'
  },

});

//make this component available to the app
export default UserProfile;

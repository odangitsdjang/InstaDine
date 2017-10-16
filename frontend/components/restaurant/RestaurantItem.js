import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity, Button, WebView } from 'react-native';
import RestaurantShowMap from './RestaurantShowMap';

class RestaurantItem extends Component {
  constructor(props) {
    super(props);
    const date = new Date;
    let minutes = date.getMinutes();
    let hour = date.getHours();

    this.state = {
      restaurant: '',
      user: '',
      reservationTime: `${hour}:${minutes}`,
      seat_count: 1
    };

    this.redirectHome = this.redirectHome.bind(this);
    this.handleReservation = this.handleReservation.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentWillReceiveProps(newProps) {
    // debugger
    if (newProps.restaurantId && newProps.restaurantId !== this.props.restaurantId) {
      this.setState({
        restaurant: newProps.restaurants[newProps.restaurantId],
        user: newProps.user
      });
    }
  }

  componentDidMount() {
    // Get restaurant info somehow, put that into props talk to adrian 
    //assume map will feed restaurant into this component through prop
    if (this.props.restaurants && this.props.restaurantId){
      this.setState({
        restaurant: this.props.restaurants[this.props.restaurantId],
        user: this.props.user
      });
    }
  }

  // Only render 10 time frames after current time
  renderReservationTimes() {
    const date = new Date;
    let minutes = date.getMinutes();
    let hour = date.getHours();
    const reservationTimes = Array(10).fill(undefined);
    return reservationTimes.map((x, index)=> {
        minutes += 5; 
        minutes =  Math.ceil(minutes/5)*5;
        if (minutes >= 60) {
          hour++;
          minutes %= 60;
          if (hour === 24) hour = 0; 
        }
        let string = `${(hour === 0 ? 12 : ((hour > 12) ? hour % 12 : hour))}:` + ((minutes < 10) ? `0${minutes} ` : `${minutes} `)  + ((hour >= 12) ? "PM" : "AM");
      return (
          <Picker.Item key={index} label={string} value={`${hour}:${minutes}`}/>
      );
    });
  }

  renderSeatCount(){
    let size = [];
    for(let i = 1; i <= 10; i++){
      size.push(i);
    }

    return size.map(i => {
      return (
        <Picker.Item
          key={i}
          label={i < 2 ? i + " seat" : i + " seats"}
          value={i} />
      );
    });
  }

  reserveOrCancel() {
      if (this.props.reservation) {
        let {seat_count, datetime} = this.props.reservation;
        let restaurant = this.props.restaurants[this.props.restaurantId];
        datetime = datetime.slice(11,16);

        return (
          <View style={styles.reserveContainer}>
            <Text style={styles.restInfoText}>
              Reservation Reminder
            </Text>
            <Text style={styles.restInfoText}>
              Hello {this.props.user.username}!
            </Text>
            <Text style={styles.restInfoText}>
              If you wish to book this restaurant
            </Text>
            <Text style={styles.restInfoText}>
              Please cancel your existing reservation
            </Text>
            <Text style={styles.restInfoText}>
              Your reservation is at {datetime}
              </Text>
            <Text style={styles.restInfoText}>
              You have {seat_count} friends coming with you
            </Text>
            <TouchableOpacity
              style={{
                borderColor: 'black',
                borderWidth: 2,
                padding: 10
              }}
              onPress={this.handleCancel}>
              <Text style={styles.reserveText}>Cancel Reservation</Text>
            </TouchableOpacity>
          </View>
        );
      }else{
        return (
          <View style={styles.reserveContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Picker selectedValue={this.state.reservationTime}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({
                    reservationTime: itemValue
                  });
                }}>
                {this.renderReservationTimes()}
              </Picker>

              <Picker
                selectedValue={this.state.seat_count}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => this.setState({
                  seat_count: itemValue
                })}>
                {this.renderSeatCount()}
              </Picker>
            </View>

            <View style={styles.reserve}>
              <TouchableOpacity
                style={{
                  borderColor: 'black',
                  borderWidth: 2,
                  padding: 10
                }}
                onPress={this.handleReservation}>
                <Text style={styles.reserveText}>Queue Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      } 
  }
  
  redirectHome() {
    this.props.navigation.navigate('Drawer');
  }

  translateTimeUTC(time){
    let fullYear = time.getFullYear();
    let month = time.getMonth();
    let day = time.getDay();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getMinutes();

    return Date.UTC(fullYear, month, day, hour, min, sec);
  }

  handleReservation(){
    let resTime = new Date();

    //set time to the user's time choice 
    resTime.setHours(this.state.reservationTime.split(":")[0]);
    resTime.setMinutes(this.state.reservationTime.split(":")[1]);

    //translate time to UTC since database is in UTC
    let bookTime = this.translateTimeUTC(resTime);

    let reservation = {
      restaurant_id: this.state.restaurant.id,
      seat_count: this.state.seat_count,
      datetime: bookTime
    };

    this.props.createReservation(reservation, this.props.userToken);
  }

  handleCancel(){
    this.props.destroyReservation(this.props.userToken);
  }

  render() {
    if(this.state.restaurant){
      let {name, full_address, phone_number} = this.state.restaurant;
  
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={{marginTop:5}}
              onPress={this.redirectHome}>
              <Text style={{color: 'black'}}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{name}</Text>
          </View>
  
          <View style={styles.restInfo}>
            <View style={styles.restInfoTextContainer}>
             <Text style={styles.restInfoText}>Address: {full_address}</Text>
             <Text style={styles.restInfoText}>Call us at: {phone_number}</Text>
            </View>
            <View style={{flex: 2}}>
             <RestaurantShowMap
                  restaurant={this.state.restaurant}/>
            </View>
          </View>

          { this.reserveOrCancel() }

        </View>
      );

      }else{
        return(
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
              Loading...
            </Text>
          </View>
        );
      }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#65CCB8'
  },
  reserveContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingBottom: 20,
    flex: 4
  },
  restInfoTextContainer:{
    flex: 1, 
    flexDirection: 'column'
  },
  restInfoText: {
    fontSize: 20,
    padding: 10,
    alignSelf: 'center'
  },
  restInfo: {
    flex: 4,
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
  header: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'teal'
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Chalkboard SE',
    flex: 1
  }, 
  reserve: {
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  reserveText: {
    fontSize: 20,
    fontFamily: 'Chalkboard SE'
  },
  picker: {
    backgroundColor: 'white',
    flex: 1
  }
});

export default RestaurantItem;

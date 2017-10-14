import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity, Button } from 'react-native';
import RestaurantShowMap from './RestaurantShowMap';

const DUMMY_RESTAURANT = {
  address: {
    city: "San Francisco",
    state: "CA",
    street: "86 Carl St",
    zip: 94117
  },
  full_address: "86 Carl St, San Francisco, CA 94117, USA",
  id: "59dfe1b5914b7fbb4e787c35",
  latlng: {
    latitude: 37.7659667,
    longitude: -122.4496661
  },
  name: "Burgermeister",
  phone_number: "(415) 566-1274"
};

class RestaurantItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: DUMMY_RESTAURANT,
      user: '',
      reservationTime: "18:15",
      seat_count: 0
    };
    this.redirectHome = this.redirectHome.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Get restaurant info somehow, put that into props talk to adrian 
    //assume map will feed restaurant into this component through prop
    // this.setState({
    //   restaurant: this.props.restaurant,
    //   user: this.props.user,
    //   reservationTime: '',
    //   seat_count: 0
    // });
  
    this.setState({
      user: this.props.user
    });
    
  }

  // Only render 10 time frames after current time
  renderReservationTimes() {
    const date = new Date;
    let minutes = date.getMinutes();
    let hour = date.getHours();
    const reservationTimes = Array(10).fill(undefined);
    return reservationTimes.map((x, index)=> {
      // if (index !== 0 ) { //there might be an edge case here 
        minutes += 5; 
        minutes =  Math.ceil(minutes/5)*5;
        if (minutes >= 60) {
          hour++;
          minutes %= 60;
        }
      // } 
      let string = `${(hour > 12) ? hour%12 : hour}:` + ((minutes < 10) ? `0${minutes} ` : `${minutes} `)  + ((hour >= 12) ? "PM" : "AM");
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
    return (
      <View>
        <View style={styles.reserve}>  
          <TouchableOpacity
            style={{borderColor: 'black', 
                    borderWidth: 2,
                    padding: 10}}
            onPress={this.handleSubmit}>
            <Text style={styles.reserveText}>Reserve</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Picker selectedValue= { this.state.reservationTime }
                  style={styles.picker}
                  onValueChange= { (itemValue, itemIndex) => this.setState({ 
                    reservationTime: itemValue })}>
              {this.renderReservationTimes()}
          </Picker>

          <Picker 
            selectedValue={this.state.seat_count}
            style={styles.picker}
            onValueChange={ (itemValue, itemIndex) => this.setState({
              seat_count: itemValue
            })}>
            {this.renderSeatCount()}
          </Picker>
        </View>
          
      </View>
      
    );
  }
  
  redirectHome() {
    this.props.navigation.navigate('Map');
  }

  handleSubmit(){
    let reservation = {
      restaurant_id: this.state.restaurant.id,
      seat_count: this.state.seat_count,
      datetime: this.state.reservationTime
    };

    this.props.createReservation(reservation, this.props.userToken);
  }

  render() {
    // debugger
    let {name, full_address, phone_number} = this.state.restaurant;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity
          onPress={this.redirectHome}
          style={{alignSelf: 'flex-start', flex: 1, marginTop: 7}}>
          <Text style={{fontSize: 15}}>Go Back</Text>
        </TouchableOpacity>
          <Text style={styles.title}>{name}</Text>
        </View>

        <View style={styles.restInfo}>
          <View style={styles.restInfoTextContainer}>
           <Text style={styles.restInfoText}>Address: {full_address}</Text>
           <Text style={styles.restInfoText}>Call us at {phone_number}</Text>
          </View>
           <RestaurantShowMap
                style={{flex: 1}}
                restaurant={[this.state.restaurant]}/>
        </View>


        <View >
          { this.reserveOrCancel() }
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#65CCB8'
  },
  restInfoTextContainer:{
    flex: 1, 
    flexDirection: 'column'
  },
  restInfoText: {
    fontSize: 15,
    padding: 10,
    alignSelf: 'center'
  },
  restInfo: {
    flex: 1
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal'
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Chalkboard SE',
    alignSelf: 'center',
    flex: 2
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

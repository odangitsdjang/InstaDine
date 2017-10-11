import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity } from 'react-native';

const DUMMY_RESTAURANT = {
  name: "Davids Best Korean BBQ",
  address: { latitude: 37.777728, longitude: -122.408806 },
  manager: {
    required: 'Manager is required',
    user: {}
  },
  queue: [
    {
      reservation: {}
    }
  ]
};
const DUMMY_USER = {

};

class RestaurantItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: DUMMY_RESTAURANT,
      user: DUMMY_USER,
      reservationTime: "18:15"
    };

  }

  componentDidMount() {
    // Get restaurant info somehow, put that into props talk to adrian 


  }
  // Only render 10 time frames after current time
  renderReservationTimes() {
    const date = new Date;
    let minutes = date.getMinutes();
    let hour = date.getHours();
    const reservationTimes = Array(10).fill(undefined);
    return reservationTimes.map((x, index)=> {
      if (index !== 0 ) {
        minutes += 5; 
        if (minutes >= 60) {
          hour++;
          minutes %= 60;
        }
      } 
      let string = `${hour%12}:` + ((minutes < 10) ? `0${minutes} ` : `${minutes} `)  + ((hour > 12) ? "PM" : "AM");
      return (
          <Picker.Item key={index} label={string} value={`${hour}:${minutes}`}/>
      );
    });
  }


  reserveOrCancel() {
    return (
      <View>
        <Picker selectedValue= { this.state.reservationTime }
                style={styles.picker}
                onValueChange= { (itemValue, itemIndex) => this.setState({ 
                  reservationTime: itemValue })}>
            {this.renderReservationTimes()}
        </Picker>
        <View>
          <TouchableOpacity>
            <Text>
              Reserve
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
    );
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{this.state.restaurant.name}</Text>
        </View>
        <View>
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
    backgroundColor: '#2c3e50',
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
    fontFamily: 'Chalkboard SE'
  }, 
  picker: {
    backgroundColor: 'white'
  }
});

export default RestaurantItem;

import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity, Button } from 'react-native';

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
      reservationTime: "18:15",
      seat_count: 0
    };
    this.redirectHome = this.redirectHome.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
          {/* <TouchableOpacity>
            <Text style={styles.reserveText} >
              Reserve
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
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
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{this.state.restaurant.name}</Text>
        </View>
        <View >
          { this.reserveOrCancel() }
        </View>

        <TouchableOpacity
          onPress={this.redirectHome}
          style={styles.button}>
          <Text style={styles.text}>Go Back</Text>
        </TouchableOpacity>

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
    fontFamily: 'Chalkboard SE'
  }, 
  reserve: {
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  reserveText: {
    fontSize: 15,
    fontFamily: 'Chalkboard SE'
  },
  picker: {
    backgroundColor: 'white',
    flex: 1
  }
});

export default RestaurantItem;

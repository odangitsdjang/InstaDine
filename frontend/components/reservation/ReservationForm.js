//import liraries
import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Button 
} from 'react-native';

// create a component
class ReservationForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurant_id: null,
      seat_count: null,
      datetime: Date.now()
    };
  }

  handleInput(type){
    return event => this.setState({[type]: event.nativeEvent.text});
  }
  
  handleSubmit(event){
    const newReservation = {
      restaurant_id: this.state.restaurant_id,
      seat_count: parseInt(this.state.restaurant_id),
      datetime: this.state.datetime
    };

    this.props.createReservation(newReservation, this.props.userToken);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>ReservationForm</Text>

        <Text>Restaurant ID</Text>
        <TextInput
          onchange={this.handleInput('restaurant_id')}
          value={this.state.restaurant_id}
          placeholder='RestaurantID' />
        
        <Text>Seat Count</Text>
        <TextInput
          onchange={this.handleInput('seat_count')}
          value={this.state.seat_count}
          placeholder='Seat Count' />

        <Text>Datetime</Text>
        <TextInput
          onchange={this.handleInput('datetime')}
          value={this.state.datetime}
          placeholder='Date Time' />

        <Button
          onPress={this.handleSubmit}
          title='Create Reservation' />
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
export default ReservationForm;

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
      restaurant_id: '',
      seat_count: '',
      datetime: Date.now()
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.redirectBack = this.redirectBack.bind(this)l
  }

  componentDidMount(){
    console.log(this.props);
  }

  handleInput(type){
    // console.log(this.props);
    // console.log(this.state);
    return event => this.setState({[type]: event.nativeEvent.text});
  }
  
  handleSubmit(event){
    const newReservation = {
      restaurant_id: this.state.restaurant_id,
      seat_count: parseInt(this.state.seat_count),
      datetime: this.state.datetime
    };

    this.props.createReservation(newReservation, this.props.userToken);
  }

  redirectBack(){
    this.props.navigation.goBack('MapItem');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>ReservationForm</Text>

        <Text>Restaurant ID</Text>
        <TextInput
          onChange={this.handleInput('restaurant_id')}
          value={this.state.restaurant_id}
          placeholder='RestaurantID' />
        
        <Text>Seat Count</Text>
        <TextInput
          onChange={this.handleInput('seat_count')}
          value={this.state.seat_count.toString()}
          placeholder='Seat Count' />

        <Text>Datetime</Text>
        <TextInput
          onChange={this.handleInput('datetime')}
          value={this.state.datetime.toString()}
          placeholder='Date Time' />

        <Button
          onPress={this.handleSubmit}
          title='Create Reservation' />
        
        <Button
          onPress={)}  
          title='Go Back' />
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

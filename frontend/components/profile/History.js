//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,
         ScrollView } from 'react-native';
import { fetchReservationHistory } from '../../actions/reservation_actions';

// create a component
class History extends Component {
  constructor(props){
    super(props);
    this.state = { reservations : '' };
    this.redirectMap = this.redirectMap.bind(this);
  }
  
  redirectMap() {
    this.props.navigation.navigate('Map');
  }

  componentDidMount(){
    fetchReservationHistory(this.props.userToken).then((res)=> this.setState({reservations: res}));
  }

  historyItems(){
    if(!this.state.reservations){
      return(
        <Text>You have no past reservations</Text>
      );
    }else{
      // console.log(this.state.restaurants);
      let reservations = this.state.reservations;

      // reservations.map(reservation => {
      //   return reservation['restaurant_name'] = this.props.restaurants[reservation.restaurant_id].name;
      // });

      return reservations.map((reservation,idx) => {
        return(
          <View key={idx}>
            {/* <Text>{reservation.restaurant_name}</Text> */}
            <Text>Seats {reservation.seat_count}</Text>
            <Text>When {reservation.datetime}</Text>
          </View>
        );
      });
    }
  }

  render() {
    if(this.state.reservations){
      return (
        <View style={styles.container}>
          <Text>This is Queue History!</Text>
            {this.historyItems()}
          <TouchableOpacity onPress={this.redirectMap}>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
      );
    }else{
      return(
        <View style={styles.container}>
          <Text>No reservation</Text>
        </View>
      );
    }
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  }
});

//make this component available to the app
export default History;

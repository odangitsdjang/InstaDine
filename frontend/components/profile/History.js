//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,
         ScrollView } from 'react-native';

// create a component
class History extends Component {
  static navigationOptions = {
    drawerLabel: 'View Queue History'
  };

  constructor(props){
    super(props);
    this.redirectMap = this.redirectMap.bind(this);
  }

  componentWillMount(){
    this.props.fetchReservations(this.props.userToken, 'History');
  }
  
  redirectMap() {
    this.props.navigation.navigate('Map');
  }

  historyItems(){
 
    if(!this.props.reservations){
      return(
        <Text>You have no past reservations</Text>
      );
    }else{
      // console.log(this.props.restaurants);
      let reservations = this.props.reservations;

      reservations.map(reservation => {
        return reservation['restaurant_name'] = this.props.restaurants[reservation.restaurant_id].name;
      });

      return reservations.map((reservation,idx) => {
        return(
          <View key={idx}>
            <Text>{reservation.restaurant_name}</Text>
            <Text>Seats {reservation.seat_count}</Text>
            <Text>When {reservation.datetime}</Text>
          </View>
        );
      });
    }
  }

  render() {
    if(this.props.reservations){
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

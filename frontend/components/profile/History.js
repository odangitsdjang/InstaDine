//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,
         ScrollView, Image } from 'react-native';
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

  componentDidMount() {
    if (this.props.currentUser.user_id) {
      this.props.fetchHistory(this.props.userToken).then(response => {
        this.setState({reservations: response.data.reverse()});
      });
    }
  }

  historyItems(){
    if(!this.state.reservations){
      return(
        <Text>You have no past reservations</Text>
      );
    }else{
      let reservations = this.state.reservations;

      return reservations.map((reservation, idx) => {
        const restaurant = this.props.restaurants[reservation.restaurant_id];
        const restaurantName = restaurant.name;
        const restaurantImage = restaurant.image;
        return (
          <View key={idx} style={styles.restaurantItem}>
            <Image
              style={styles.image}
              source={{ uri: restaurantImage }}></Image>
          <View style={styles.restaurantText}>
            <Text style={styles.title}>{restaurantName}</Text>
            <Text style={styles.info}>{reservation.status}</Text>
            <Text style={styles.info}>Seats {reservation.seat_count}</Text>
            <Text style={styles.info}>On {reservation.datetime}</Text>
          </View>
          </View>
        );
      });
    }
  }

  render() {
    if(this.state.reservations){
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 30, padding: 20}}>Queue History</Text>
          <ScrollView>
              {this.historyItems()}
          </ScrollView>
          <TouchableOpacity onPress={this.redirectMap}
              style={styles.button}>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
      );
    }else{
      return(
        <View style={styles.container}>
          <Text>No reservation</Text>
          <TouchableOpacity onPress={this.redirectMap}
            style={styles.button}>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

// define your styles
const styles = StyleSheet.create({
  title: {
    fontWeight: '600'
  },
  restaurantText: {
    flexDirection: 'column',
    margin: 10
  },
  restaurantItem: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  info: {
    fontSize: 15
  },
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black'
  },
  image: {
    width: 100,
    height: 75,
    padding: 10
  }
});

//make this component available to the app
export default History;

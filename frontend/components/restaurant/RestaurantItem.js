import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity, Button } from 'react-native';

class RestaurantItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.redirectHome = this.redirectHome.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.restaurantId && newProps.restaurantId !== this.props.restaurantId) {
      
    //   this.setState({
    //     name: newProps,
    //     address: { latitude: 37.777728, longitude: -122.408806 },
    //     manager: {
    //       required: 'Manager is required',
    //       user: {}
    //     },
    //     queue: [
    //       {
    //         reservation: {}
    //       }
    //     ]
    //   });
    // }
    }
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
        <View style={styles.reserve}>  
          <TouchableOpacity>
            <Text style={styles.reserveText} >
              Reserve
            </Text>
          </TouchableOpacity>
        </View>
        <Picker selectedValue= { this.state.reservationTime }
                style={styles.picker}
                onValueChange= { (itemValue, itemIndex) => this.setState({ 
                  reservationTime: itemValue })}>
            {this.renderReservationTimes()}
        </Picker>
      </View>
      
    );
  }
  
  redirectHome() {
    this.props.navigation.navigate('Drawer');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <View >
          { this.reserveOrCancel() }
        </View>
        <Button
          onPress={this.redirectHome}
          title='Go Back' />
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
    backgroundColor: 'white'
  }
});

export default RestaurantItem;

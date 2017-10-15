import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// don't change this class unless you are going to test it thoroughly!!! 

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: 0,
      results: [
        { name: "Davids hood", full_address: '221 7th Street' },
        { name: "Adrians hood", full_address: '12th Street' },
        { name: "jerrys gfs hood", full_address: 'Some Other address' }

      ]
     };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.results !== this.props.results) {
      this.setState({ results: nextProps.results });
    }
    
  }

  // implement this with backend
  goToRestaurant(restaurantId) { 
    // console.log(this.props.results);
    this.props.redirectRestaurant(restaurantId);
  }
  
  render() {
    if (this.props.searchActive && typeof this.state.results !== "string" ){ 
      // console.log(this.state.results)
      // debugger
      return (
        <View style={styles.container}>
            <FlatList
              styles={styles.actualList}
              data={this.state.results}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>{
                  console.log(item);
                    this.goToRestaurant(item._id);
                  }} key={item.name} style={styles.list}>
                  <Ionicons name="ios-restaurant" style={styles.restaurantIcon} 
                    size={30}/>
                  <View style={{flex: 8, alignSelf: 'stretch', alignItems: 'stretch'}}>
                    <Text style={styles.restaurantName}>{item.name}</Text>
                    <Text style={styles.restaurantAddress}>{item.full_address}</Text>
                  </View>
                  <Ionicons name="ios-arrow-forward" style={styles.goToIcon} size={30}/>
                </TouchableOpacity>
              )}/>
        </View>
      );
      // no restaurants found
    }else if (this.props.searchActive && typeof this.state.results === "string") return (
      <View style={styles.container}>
      </View>
    );
    else return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 110,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white',
  }, 
  actualList: {
    alignItems: 'stretch'
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    height: 77,
    borderBottomWidth: 1,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderColor: 'rgb(200,200,200)'
  }, 
  restaurantIcon: {
    flex: 1,
    paddingLeft: 10,
    alignSelf: 'center'
  },
  restaurantImage: {

  },
  restaurantName: {
    alignSelf: 'center',
    fontSize: 20

  }, 
  restaurantAddress: {
    alignSelf: 'center', 
    fontSize: 13
  },
  goToIcon: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end'
  }
});

export default SearchResults;

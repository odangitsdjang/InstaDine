import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: 0,
      results: [
        { name: "Davids hood", address: '221 7th Street' },
        { name: "Adrians hood", address: '12th Street' },
        { name: "jerrys gfs hood", address: 'Some Other address' }

      ]
     };
  }
  
  componentDidMount() {
    // this.setState({isLoaded: 1});
    // set results 
  }

  // implement this with backend
  goToRestaurant(restaurantName) { 

  }
  
  render() {
    if (this.props.searchActive) 
      return (
        <View style={styles.container}>
            <FlatList
              styles={styles.actualList}
              data={this.state.results}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>this.goToRestaurant(item.name)} key={item.name} style={styles.list}>
                  <Ionicons name="ios-restaurant" style={styles.restaurantIcon} 
                    size={20}/>
                  <View style={{flex: 8, flexDirection: 'row', alignItems: 'stretch' }}>
                    <Text style={styles.restaurantName}>{item.name}</Text>
                    <Text style={styles.restaurantAddress}>{item.address}</Text>
                  </View>
                  <Ionicons name="ios-arrow-forward" style={styles.goToIcon}/>
                </TouchableOpacity>
              )}/>
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
    fontSize: 20,
    height: 77,
    borderBottomWidth: 1,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderColor: 'rgb(200,200,200)'
  }, 
  restaurantIcon: {
    flex: 1,
    paddingLeft: 10,
  },
  restaurantImage: {

  },
  restaurantName: {

  }, 
  restaurantAddress: {

  },
  goToIcon: {
    flex: 1
  }
});

export default SearchResults;

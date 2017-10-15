//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class History extends Component {
  constructor(props){
    super(props);
    this.redirectMap = this.redirectMap.bind(this);
  }
  
  redirectMap() {
    this.props.navigation.navigate('Map');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Queue History!</Text>
        <TouchableOpacity onPress={this.redirectMap}>
          <Text>Back</Text>
        </TouchableOpacity>
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
export default History;

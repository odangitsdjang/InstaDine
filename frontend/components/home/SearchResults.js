import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SearchResults extends Component {
  render() {
    if (this.props.searchActive) 
      return (
        <View style={styles.container}>
          <Text>SearchResults</Text>
        </View>
      );
    else return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 110,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default SearchResults;

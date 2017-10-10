//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Signup extends Component {
  constructor(props) {
    super(props);
    this.redirectBack = this.redirectBack.bind(this);
  }

  redirectBack() {
    this.props.navigation.dispatch({ type: 'NAVIGATION/BACK' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Signup page</Text>
        <Button
          onPress={this.redirectBack}
          title='Back' />
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
export default Signup;
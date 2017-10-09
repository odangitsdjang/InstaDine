import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const mapStateToProps = (state) => ({
  todos: state.todos
});

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {}; 
  }
  
  render() {
    return (
      <View style={styles.container}>
       
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
  }

});

export default connect(mapStateToProps)(Main);
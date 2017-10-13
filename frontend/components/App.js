//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import HomeWithNavigationState from '../navigators/HomeNavigator';
import AppWithNavigationState from '../navigators/AppNavigator';

// create a component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }

  componentDidMount(){
    debugger;
    if (this.props.currentUser && this.props.currentUser.user_id) {
      this.setState({ loggedIn: true });
    }
    else { this.setState({ loggedIn: false }); }
  }

  componentWillReceiveProps(newProps) {
    debugger
    if (newProps.currentUser && newProps.currentUser.user_id) {
      this.setState({ loggedIn: true });
    }
    else { this.setState({ loggedIn: false }); }
  }
  
  render() {
    return (
      this.state.loggedIn ?  <HomeWithNavigationState /> : <AppWithNavigationState /> 
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

const mapStateToProps = state => ({
  currentUser: state.session.currentUser 
});

export default connect(mapStateToProps)(App);
//make this component available to the app
// export default App;

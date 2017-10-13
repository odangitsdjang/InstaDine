import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import Splash from '../components/Splash';
import Login from '../components/auth/LoginContainer';
import Signup from '../components/auth/SignupContainer';

// TEMPORARY REMOVE AFTER TESTING
import HomePage from '../components/home/HomePage';
// TEMPORARY REMOVE AFTER TESTING

const routeConfig = {
  Splash: { screen: Splash },
  Login: { screen: Login },
  Signup: { screen: Signup },
};

const appNavigatorConfig = {
  navigationOptions: { tabBarVisible: false },
  initialRouteName: 'Splash'
};

export const AppNavigator = TabNavigator(
  routeConfig,
  appNavigatorConfig
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}/>
);

const mapStateToProps = state => ({
  nav: state.nav.app
});

export default connect(mapStateToProps)(AppWithNavigationState);
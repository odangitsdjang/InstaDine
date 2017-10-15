import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

// Import screens
import Splash from '../components/Splash';
import Login from '../components/auth/LoginContainer';
import Signup from '../components/auth/SignupContainer';
import Blank from '../components/Blank';

const routeConfig = {
  Blank: { screen: Blank },
  Splash: { screen: Splash },
  Login: { screen: Login },
  Signup: { screen: Signup },
};

const appNavigatorConfig = {
  navigationOptions: { tabBarVisible: false },
  initialRouteName: 'Splash'
};

export const AuthNavigator = TabNavigator(
  routeConfig,
  appNavigatorConfig
);

const AuthWithNavigationState = ({ dispatch, nav }) => (
  <AuthNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav.auth
});

export default connect(mapStateToProps)(AuthWithNavigationState);


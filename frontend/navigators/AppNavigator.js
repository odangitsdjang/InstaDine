import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import Splash from '../components/Splash';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import HomePage from '../components/home/HomePage';

const routeConfig = {
  Splash: { screen: Splash },
  Login: { screen: Login },
  Signup: { screen: Signup },
  HomePage: { screen: HomePage }
};

const stackNavigatorConfig = {
  navigationOptions: { tabBarVisible: false },
  initialRouteName: 'Splash'
};

export const AppNavigator = TabNavigator(
  routeConfig,
  stackNavigatorConfig
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}/>
);

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
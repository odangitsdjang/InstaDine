import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import Splash from '../components/Splash';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import HomePage from '../components/home/HomePage';

const routeConfig = {
  Splash: { screen: Splash },
  Login: { screen: Login },
  Signup: { screen: Signup },
  HomePage: { screen: HomePage }
};

const appNavigatorConfig = {
  navigationOptions: { tabBarVisible: true },
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
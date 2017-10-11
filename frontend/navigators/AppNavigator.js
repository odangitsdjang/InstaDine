import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import Splash from '../components/Splash';
import Login from '../components/auth/LoginContainer';
import Signup from '../components/auth/SignupContainer';
import HomePage from '../components/home/HomePage';
import RestaurantContainer from '../components/restaurant/RestaurantContainer';

const routeConfig = {
  Splash: { screen: Splash },
  Login: { screen: Login },
  Signup: { screen: Signup },
  HomePage: { screen: HomePage },
  RestaurantContainer: { screen: RestaurantContainer }
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
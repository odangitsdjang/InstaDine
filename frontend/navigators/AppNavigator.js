import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

// Import screens
import Blank from '../components/Blank';
import AuthWithNavigationState from './AuthNavigator';
import HomeWithNavigationState from './HomeNavigator';

const routeConfig = {
  Blank: { screen: Blank },
  AuthTab: { screen: AuthWithNavigationState },
  HomeTab: { screen: HomeWithNavigationState }
};

const appNavigatorConfig = {
  navigationOptions: { tabBarVisible: false },
  initialRouteName: 'Blank'
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
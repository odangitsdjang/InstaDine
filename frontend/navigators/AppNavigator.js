import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Splash from '../components/Splash';
import Login from '../components/Login';

const routeConfig = {
  Splash: { screen: Splash },
  Login: { screen: Login }
};

const stackNavigatorConfig = {
  headerMode: 'none',
  initialRouteName: 'Splash'
};

export const AppNavigator = StackNavigator(
  routeConfig,
  stackNavigatorConfig
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}/>
);

AppWithNavigationState.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
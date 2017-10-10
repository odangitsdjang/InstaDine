import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
import UserProfile from '../components/profile/UserProfile';
import MapItem from '../components/home/MapItem';
// import Splash from '../components/Splash';

const routeConfig = {
  MapItem: { screen: MapItem },
  UserProfile: { screen: UserProfile }
};

const homeNavigatorConfig = {
  initialRouteName: 'MapItem'
};

export const HomeNavigator = TabNavigator(
  routeConfig,
  homeNavigatorConfig
);

const HomeWithNavigationState = ({ dispatch, nav }) => (
  <HomeNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}/>
);

const mapStateToProps = (state, ownProps) => ({
  nav: state.nav.home
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeWithNavigationState);

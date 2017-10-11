import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
import UserProfileContainer from '../components/profile/UserProfileContainer';
import MapItem from '../components/home/MapItem';

const routeConfig = {
  MapItem: { screen: MapItem },
  UserProfile: { screen: UserProfileContainer }
};

const homeNavigatorConfig = {
  // navigationOptions: { tabBarVisible: true },
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

import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
// import UserProfileContainer from '../components/profile/UserProfileContainer';
// import MapItem from '../components/home/MapItem';
// import Splash from '../components/Splash';
import RestaurantContainer from '../components/restaurant/RestaurantContainer';
import Drawer from '../navigators/DrawerNavigator';

const routeConfig = {
  Drawer: { screen: Drawer },
  QueueUp: { screen: RestaurantContainer }
};

const homeNavigatorConfig = {
  navigationOptions: { tabBarVisible: false },
  initialRouteName: 'Drawer'
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

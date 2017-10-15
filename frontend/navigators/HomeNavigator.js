import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
import RestaurantContainer from '../components/restaurant/RestaurantContainer';
import DrawerWithNavigationState from '../navigators/DrawerNavigator';

const routeConfig = {
  Drawer: { screen: DrawerWithNavigationState },
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

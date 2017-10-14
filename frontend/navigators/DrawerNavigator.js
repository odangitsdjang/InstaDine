import React from 'react';
import { addNavigationHelpers, DrawerNavigator } from 'react-navigation';
import ReservationFormContainer from '../components/reservation/ReservationFormContainer';
import UserProfileContainer from '../components/profile/UserProfileContainer';
import MapItem from '../components/home/MapItem';
import RestaurantContainer from '../components/restaurant/RestaurantContainer';
import { connect } from 'react-redux';

const map = connect(mapStateToProps)(MapItem);

const mapStateToProps = state => ({
  state: state
});

const routeConfig = {
  UpdateUser: { screen: UserProfileContainer },
  NewReservation: { screen: ReservationFormContainer },
  Map: { screen: map },
  Restaurant: { screen: RestaurantContainer }
};

const navigatorConfig = {
  initialRouteName: 'Map'
};

const Drawer = DrawerNavigator(
  routeConfig,
  navigatorConfig
);

// const DrawerWithNavigationState = ({dispatch, nav}) => (
//   <Drawer navigation={addNavigationHelpers()} />
// );

export default Drawer;
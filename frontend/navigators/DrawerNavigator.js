import React from 'react';
import { addNavigationHelpers, DrawerNavigator } from 'react-navigation';
import ReservationFormContainer from '../components/reservation/ReservationFormContainer';
import UserProfileContainer from '../components/profile/UserProfileContainer';
import MapItem from '../components/home/MapItem';
import { connect } from 'react-redux';

const map = connect(mapStateToProps)(MapItem);

const mapStateToProps = state => ({
  state: state
});

const routeConfig = {
  UpdateUser: { screen: UserProfileContainer },
  NewReservation: { screen: ReservationFormContainer },
  MapItem: { screen: map }
};

const navigatorConfig = {
  initialRouteName: 'MapItem'
};

const Drawer = DrawerNavigator(
  routeConfig,
  navigatorConfig
);

// const DrawerWithNavigationState = ({dispatch, nav}) => (
//   <Drawer navigation={addNavigationHelpers()} />
// );

export default Drawer;
import React from 'react';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import { addNavigationHelpers, DrawerNavigator } from 'react-navigation';

import UserProfileContainer from '../components/profile/UserProfileContainer';
import MapItem from '../components/home/MapItem';
import DrawerContentContainer from '../components/profile/DrawerContentContainer';

const routeConfig = {
  UpdateUser: { screen: UserProfileContainer },
  Map: { screen: MapItem },
};

const navigatorConfig = {
  initialRouteName: 'Map',
  contentComponent: DrawerContentContainer,
  drawerWidth: Dimensions.get('window').width * 0.6
};

export const Drawer = DrawerNavigator(
  routeConfig,
  navigatorConfig
);

// Drawer DOES NOT work with Redux
const DrawerComponent = () => (
  <Drawer />
);

const mapStateToProps = state => ({
  state: state,
});

connect(mapStateToProps)(DrawerComponent);

export default DrawerComponent;
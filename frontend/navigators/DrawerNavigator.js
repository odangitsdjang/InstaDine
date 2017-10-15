import React from 'react';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import { addNavigationHelpers, DrawerNavigator } from 'react-navigation';

// Import screens
import UserProfileContainer from '../components/profile/UserProfileContainer';
import MapItem from '../components/home/MapItem';
import DrawerContentContainer from '../components/profile/DrawerContentContainer';
import HistoryContainer from '../components/profile/HistoryContainer';

const routeConfig = {
  UpdateUser: { screen: UserProfileContainer },
  QueueHistory: { screen: HistoryContainer },
  Map: { screen: MapItem },
};

const navigatorConfig = {
  initialRouteName: 'Map',
  contentComponent: DrawerContentContainer,
  drawerWidth: Dimensions.get('window').width * 0.6
};

const Drawer = DrawerNavigator(
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


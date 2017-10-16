import React from 'react';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import { addNavigationHelpers, DrawerNavigator } from 'react-navigation';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

// Import screens
import UserProfileContainer from '../components/profile/UserProfileContainer';
import MapItem from '../components/home/MapItem';
import DrawerContentContainer from '../components/profile/DrawerContentContainer';
import HistoryContainer from '../components/profile/HistoryContainer';

const itemColor = '#1392B5';

const MapScreen = ({ navigation, banner }) => (
  <MapItem banner={'Home Screen'} navigation={navigation} />
);

MapScreen.navigationOptions = {
  drawerLabel: 'Continue Browsing',
  drawerIcon: () => (
    <Ionicons name='ios-restaurant' size={32} color={itemColor} />
  )
};

const EditProfileScreen = ({ navigation, banner }) => (
  <UserProfileContainer banner={'Edit Profile'} navigation={navigation} />
);

EditProfileScreen.navigationOptions = {
  drawerLabel: 'Edit Profile',
  drawerIcon: () => (
    <FontAwesome name='user' size={32} color={itemColor} />
  )
};

const HistoryScreen = ({ navigation, banner }) => (
  <HistoryContainer banner={'Queue History'} navigation={navigation} 
    style={{backgroundColor: 'black'}}/>
);

HistoryScreen.navigationOptions = {
  drawerLabel: 'Queue History',
  drawerIcon: () => (
    <MaterialIcons name='history' size={25} color={itemColor} />
  )
};

const routeConfig = {
  UpdateUser: { screen: EditProfileScreen },
  QueueHistory: { screen: HistoryScreen },
  Map: { screen: MapScreen },
};

const navigatorConfig = {
  initialRouteName: 'Map',
  // contentOptions: { style: { borderWidth: 1, borderColor: 'black'} },
  contentComponent: DrawerContentContainer,
  drawerWidth: Dimensions.get('window').width * 0.7
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


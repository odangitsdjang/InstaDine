import { Dimensions } from 'react-native';
import { addNavigationHelpers, DrawerNavigator } from 'react-navigation';
import ReservationFormContainer from '../components/reservation/ReservationFormContainer';
import UserProfileContainer from '../components/profile/UserProfileContainer';
import MapItem from '../components/home/MapItem';
import RestaurantContainer from '../components/restaurant/RestaurantItem';
import { connect } from 'react-redux';
import DrawerContentContainer from '../components/profile/DrawerContentContainer';

const map = connect(mapStateToProps)(MapItem);

const mapStateToProps = state => ({
  state: state
});

const routeConfig = {
  UpdateUser: { screen: UserProfileContainer },
  Map: { screen: map },

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

export default Drawer;
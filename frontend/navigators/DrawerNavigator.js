import { DrawerNavigator } from 'react-navigation';
import ReservationFormContainer from '../components/reservation/ReservationFormContainer';
import UserProfileContainer from '../components/profile/UserProfileContainer';

const routeConfig = {
  UpdateUser: { screen: UserProfileContainer },
  NewReservation: { screen: ReservationFormContainer }
};

const Drawer = DrawerNavigator(
  routeConfig
);

export default Drawer;
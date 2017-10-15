import { AuthNavigator } from '../../navigators/AuthNavigator';
import { NavigationActions } from 'react-navigation';
import { Drawer } from '../../navigators/DrawerNavigator';

const initialState = AuthNavigator.router.getStateForAction(
  AuthNavigator.router.getActionForPathAndParams('Blank')
);

const routes = ['Signup', 'Login', 'Splash'];

const navAuthReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'Navigation/NAVIGATE':
      if (routes.includes(action.routeName)) {
        return AuthNavigator.router.getStateForAction(
          AuthNavigator.router.getActionForPathAndParams(action.routeName)
        );
      }
      else { return state; }
    case 'AUTH_USER':
    case 'UNAUTH_USER':
      return AuthNavigator.router.getStateForAction(
        AuthNavigator.router.getActionForPathAndParams('Splash')
      );
    default:
      return state;
  }
};

export default navAuthReducer;
import { HomeNavigator } from '../../navigators/HomeNavigator';
import { NavigationActions } from 'react-navigation';

const initialState = HomeNavigator.router.getStateForAction(
  HomeNavigator.router.getActionForPathAndParams('Drawer')
);

const routes = ['Drawer', 'QueueUp', 'DrawerOpen', 'DrawerClose'];

const navHomeReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'Navigation/NAVIGATE':
      if (routes.includes(action.routeName)) {
        const newState = HomeNavigator.router.getStateForAction(
          HomeNavigator.router.getActionForPathAndParams(action.routeName)
        );
        return newState;
      }
      else { return state; }
    case 'UNAUTH_USER':
    case 'AUTH_USER':
      return HomeNavigator.router.getStateForAction(
        HomeNavigator.router.getActionForPathAndParams('Drawer')
      );
    default:
      return state;
  }
};

export default navHomeReducer;
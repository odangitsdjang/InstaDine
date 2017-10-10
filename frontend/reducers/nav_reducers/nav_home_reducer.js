import { HomeNavigator } from '../../navigators/HomeNavigator';
import { NavigationActions } from 'react-navigation';

const initialState = HomeNavigator.router.getStateForAction(
  HomeNavigator.router.getActionForPathAndParams('MapItem')
);

const routes = ['MapItem', 'UserProfile'];

const navHomeReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'NAVIGATION/BACK':
      return HomeNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
    case 'Navigation/NAVIGATE':
      if (routes.includes(action.routeName)) {
        const newState = HomeNavigator.router.getStateForAction(
          HomeNavigator.router.getActionForPathAndParams(action.routeName)
        );
        console.log(newState);
        return newState;
      }
      else { return state; }
    case 'MapItem':
      return HomeNavigator.router.getStateForAction(
        HomeNavigator.router.getActionForPathAndParams('MapItem')
      );
    case 'UserProfile':
      return HomeNavigator.router.getStateForAction(
        HomeNavigator.router.getActionForPathAndParams('UserProfile')
      );
    default:
      return state;
  }
};

export default navHomeReducer;
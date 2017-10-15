import { AppNavigator } from '../../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Blank')
);

const routes = ['Blank', 'AuthTab', 'HomeTab'];

const navAppReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'Navigation/NAVIGATE':
      if (routes.includes(action.routeName)){
        return AppNavigator.router.getStateForAction(
          AppNavigator.router.getActionForPathAndParams(action.routeName)
        );
      }
      else { return state; }
    case 'AUTH_USER':
      return AppNavigator.router.getStateForAction(
        AppNavigator.router.getActionForPathAndParams('HomeTab')
      );
    case 'UNAUTH_USER':
      return AppNavigator.router.getStateForAction(
        AppNavigator.router.getActionForPathAndParams('AuthTab')
      );
    default: 
      return state;
  }
};

export default navAppReducer;
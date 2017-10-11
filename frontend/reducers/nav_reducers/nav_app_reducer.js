import { AppNavigator } from '../../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Splash')
);

const routes = ['Signup', 'Login', 'HomePage', 'Splash'];

const navAppReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'NAVIGATION/BACK':
      return AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
    case 'Navigation/NAVIGATE':
      if (routes.includes(action.routeName)){
        return AppNavigator.router.getStateForAction(
          AppNavigator.router.getActionForPathAndParams(action.routeName)
        );
      }
      else { return state; }
    case 'Signup':
      return AppNavigator.router.getStateForAction(
        AppNavigator.router.getActionForPathAndParams('Signup')
      );
    case 'Login':
      return AppNavigator.router.getStateForAction(
        AppNavigator.router.getActionForPathAndParams('Login')
      );
    case 'HomePage':
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'HomePage' }),
        state
      );
    default:
      return state;
  }
};

export default navAppReducer;
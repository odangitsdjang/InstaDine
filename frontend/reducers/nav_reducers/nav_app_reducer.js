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
<<<<<<< HEAD:frontend/reducers/nav_reducer.js
    case 'RestaurantContainer':
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'RestaurantContainer' }),
        state
      );
    default: 
      return initialState;
=======
    default:
      return state;
>>>>>>> c99f1d2e81ab927371c5210e411b91ce18c0f824:frontend/reducers/nav_reducers/nav_app_reducer.js
  }
};

export default navAppReducer;
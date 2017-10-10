import { AppNavigator } from '../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Splash')
);

const navReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'NAVIGATION/BACK':
      return AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
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
      return initialState;
  }
};

export default navReducer;
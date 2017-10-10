import { AppNavigator } from '../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Splash')
);

const navReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'NAVIGATION/Back':
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
    default: 
      return initialState;
  }
};

export default navReducer;
import { AppNavigator } from '../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';

// Start with two routes: Splash on top of Login
const firstAction = AppNavigator.router.getActionForPathAndParams('Login');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Splash');
const initialNavState = (secondAction, tempNavState);

const navReducer = (state = initialNavState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'Back':
      return AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
    case 'Signup':
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Signup' }),
        state
      );
    case 'Login':
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
    default: 
      return AppNavigator.router.getStateForAction(action, state);
  }
};

export default navReducer;
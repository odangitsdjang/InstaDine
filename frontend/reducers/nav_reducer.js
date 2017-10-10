import { AppNavigator } from '../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';

// Start with two routes: Splash on top of Login
// const firstAction = AppNavigator.router.getActionForPathAndParams('Login');
// const tempNavState = AppNavigator.router.getStateForAction(firstAction);
// const secondAction = AppNavigator.router.getActionForPathAndParams('Splash');
// const initialNavState = (secondAction, tempNavState);

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Splash')
);

const navReducer = (state = initialState, action) => {
  Object.freeze(state);
  console.log(action);
  console.log(state);
  console.log(AppNavigator.router.getStateForAction(action,state));
  // debugger;
  switch (action.type) {
    case 'Back':
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
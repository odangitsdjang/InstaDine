import { AppNavigator } from '../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';

// Start with two routes
const firstAction = AppNavigator.router.getActionForPathAndParams('Login');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Splash');
const initialNavState = (secondAction, tempNavState);

const navReducer = (state = initialNavState, action) => {
  Object.freeze(state);
  switch (action.type) {
    default: 
      return AppNavigator.router.getStateForAction(action, state);
  }
};

export default navReducer;
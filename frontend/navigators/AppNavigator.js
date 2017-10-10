import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

<<<<<<< HEAD
import Splash from '../components/splash';
import Login from '../components/Login';
=======
import Splash from '../components/Splash';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
>>>>>>> 06caecf72d370d84b35f42e9e3e8af845c29d4be

const routeConfig = {
  Splash: { screen: Splash },
  Login: { screen: Login },
  Signup: { screen: Signup }
};

const stackNavigatorConfig = {
  headerMode: 'none',
  initialRouteName: 'Splash'
};

export const AppNavigator = StackNavigator(
  routeConfig,
  stackNavigatorConfig
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}/>
);


// COMMENTED THIS OUT BECAUSE OF REDUX-THUNK
// AppWithNavigationState.PropTypes = {
//   dispatch: PropTypes.func.isRequired,
//   nav: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
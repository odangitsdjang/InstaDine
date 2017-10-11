import {SIGNUP_URL, LOGIN_URL} from '../util/session_api_util';
import axios from 'axios';
import {addAlert} from './alerts_actions';

exports.loginUser = user => {
  return function (dispatch) {
    return axios.post(LOGIN_URL, user).then((response) => {
      console.log(response);
      var { user_id, token, currentUser } = response.data;
      dispatch(authUser(user_id, token, currentUser));
    }).catch((error) => {
      dispatch(addAlert("Could not log in."));
    });
  };
};

exports.signupUser = user => {
  return function (dispatch) {
    return axios.post(SIGNUP_URL, user).then((response) => {
      var { user_id, token, currentUser } = response.data;
      dispatch(authUser(user_id, token, currentUser));
    }).catch((error) => {
      dispatch(addAlert("Could not sign up."));
    });
  };
};


const authUser = (user_id, token, currentUser) => {
  return {
    type: 'AUTH_USER',
    token,
    currentUser
  };
};

exports.logoutUser = () => ({
  type: 'UNAUTH_USER'
});
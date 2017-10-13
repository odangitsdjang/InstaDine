import {SIGNUP_URL, LOGIN_URL} from '../util/api_util';
import axios from 'axios';
import {addAlert} from './alerts_actions';

exports.loginUser = user => {
  return function (dispatch) {
    return axios.post(LOGIN_URL, user).then((response) => {
      let { token, currentUser } = response.data;
      dispatch(authUser(token, currentUser));
    }).catch((errors) => {
      dispatch(addAlert("Incorrect login or password"));
    });
  };
};

exports.signupUser = user => {
  return function (dispatch) {
    return axios.post(SIGNUP_URL, user).then((response) => {
      let { token, currentUser } = response.data;
      dispatch(authUser(token, currentUser));
    }).catch((errors) => {
      dispatch(addAlert("Cannot Sign up with given info"));
    });
  };
};

export const authUser = (token, currentUser) => {
  return {
    type: 'AUTH_USER',
    token,
    currentUser
  };
};

exports.logoutUser = () => ({
  type: 'UNAUTH_USER'
});

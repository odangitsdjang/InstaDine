import {SIGNUP_URL, LOGIN_URL} from '../util/api_util';
import { fetchReservations } from './reservation_actions';
import axios from 'axios';
import {addAlert} from './alerts_actions';

exports.loginUser = user => {
  return function (dispatch) {
    return axios.post(LOGIN_URL, user).then((response) => {
      dispatch(authUser(response.data));
    }).catch((errors) => {
      console.log(errors);
      dispatch(addAlert("Incorrect login or password"));
    });
  };
};

exports.signupUser = user => {
  return function (dispatch) {
    return axios.post(SIGNUP_URL, user).then((response) => {
      dispatch(authUser(response.data));
    }).catch((errors) => {
      dispatch(addAlert("Cannot Sign up with given info"));
      return 'error';
    });
  };
};

export const authUser = response => {
  return {
    type: 'AUTH_USER',
    response
  };
};

exports.logoutUser = () => ({
  type: 'UNAUTH_USER'
});

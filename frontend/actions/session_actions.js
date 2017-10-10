import {SIGNUP_URL} from '../util/session_api_util';
import axios from 'axios';
import Keychain from 'react-native-keychain';
import {addAlert} from './alerts_actions';

exports.signupUser = user => {
  return function (dispatch) {
    return axios.post(SIGNUP_URL, user).then((response) => {
      var { user_id, token } = response.data;
      Keychain.setGenericPassword(user_id, token)
        .then(function () {
          dispatch(authUser(user_id));
        }).catch((error) => {
          dispatch(addAlert("Could not log in."));
        });
    }).catch((error) => {
      dispatch(addAlert("Could not sign up."));
    });
  };
};

const authUser = (user_id) => {
  return {
    type: 'AUTH_USER',
    user_id
  };
};

exports.unauthUser = {
  type: 'UNAUTH_USER'
};
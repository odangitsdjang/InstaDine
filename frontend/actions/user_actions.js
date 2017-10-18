import axios from 'axios';
import {addAlert} from './alerts_actions';
import { USER_URL } from '../util/api_util';
import { authUser } from './session_actions';

export const updateUser = (user, userToken) => {
  return dispatch => {
    return axios.patch(USER_URL, {user, userToken}).then(
      response => {
        dispatch(authUser(response.data));
    }).catch(error => dispatch(addAlert("Can't update user")));
  };
};

export const getUser = userToken => dispatch => {
  return axios.get(`${USER_URL}/${userToken}`).then(
    response => {
      dispatch(authUser(response.data));
    }
  ).catch(errors => dispatch(addAlert('No user found')));
};
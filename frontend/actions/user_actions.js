import axios from 'axios';
import {addAlert} from './alerts_actions';
import { USER_URL } from '../util/api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const updateUser = (user, userToken) => {
  return dispatch => {
    return axios.patch(USER_URL, {user, userToken}).then(
      response => dispatch(receiveUser(response.data))
    ).catch(error => dispatch(addAlert(error)));
  };
};

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
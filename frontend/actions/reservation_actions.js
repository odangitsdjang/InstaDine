import axios from 'axios';
import { addAlert } from './alerts_actions';
import { RESERVATION_URL,
         RESERVATION_HISTORY_URL } from '../util/api_util';

import { authUser } from '../actions/user_actions';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

export const createReservation = (reservation, userToken) => {
  return dispatch => {
    return axios.post(RESERVATION_URL, {reservation, userToken}).then(response => {
      const { token, currentUser } = response.data;
      dispatch(authUser(token, currentUser));
    }).catch((error) => {
      dispatch(addAlert("Cannot create Reservation"));
    });
  };
};

//get reservation history 
export const fetchReservationHistory = userToken => {
  return axios.get(`${RESERVATION_HISTORY_URL}/${userToken}`).then(response => {
    return response.data;
  }).catch(error => {
  });
};

export const destroyReservation = userToken => {
  return dispatch => {
    return axios.delete(`${RESERVATION_URL}/${userToken}`).then(response => {
      dispatch(authUser());
    }).catch((error) => {
      dispatch(addAlert("Cannot cancel Reservation"));
    });
  };
};

const removeReservation = () => ({
  type: REMOVE_RESERVATION
});

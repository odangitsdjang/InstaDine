import axios from 'axios';
import { addAlert } from './alerts_actions';
import { RESERVATION_URL } from '../util/api_util';

import { authUser } from '../actions/session_actions';


export const createReservation = (reservation, userToken) => {
  return dispatch => {
    return axios.post(RESERVATION_URL, {reservation, userToken}).then(response => {
      dispatch(authUser(response.data));
    }).catch((error) => {
      console.log(error);
      dispatch(addAlert("Cannot create Reservation"));
    });
  };
};

export const fetchReservationHistory = userToken => {
  return axios.get(`${RESERVATION_URL}/history/${userToken}`);
};

export const destroyReservation = userToken => {
  return dispatch => {
    return axios.delete(`${RESERVATION_URL}/${userToken}`).then(response => {
      dispatch(authUser(response.data));
    }).catch((error) => {
      dispatch(addAlert("Cannot cancel Reservation"));
    });
  };
};
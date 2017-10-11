import axios from 'axios';
import {addAlert} from './alerts_actions';

const RESV_URL = 'http://localhost:3000/v1/reservations';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';

export const createReservation = (reservation, userToken) => {
  return dispatch => {
    return axios.post(RESV_URL, {reservation, userToken}).then(response => {
      dispatch(receiveReservation(response.data));
    }).catch(error => dispatch(addAlert('Could not create reservation')));
  };
};

const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
});
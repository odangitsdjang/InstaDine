import axios from 'axios';
import { addAlert } from './alerts_actions';
import { RESERVATION_URL } from '../util/api_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';

export const createReservation = (reservation, userToken) => {
  return dispatch => {
    return axios.post(RESERVATION_URL, {reservation, userToken}).then(response => {
      dispatch(receiveReservation(response.data));
    }).catch(error => dispatch(addAlert("Can't make reservation")));
  };
};

const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
});
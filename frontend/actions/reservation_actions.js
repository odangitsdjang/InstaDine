import axios from 'axios';
import { addAlert } from './alerts_actions';
import { RESERVATION_URL, RESERVATION_FETCH_URL } from '../util/api_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

export const createReservation = (reservation, userToken) => {
  return dispatch => {
    return axios.post(RESERVATION_URL, {reservation, userToken}).then(response => {
      dispatch(receiveReservation(response.data));
    }).catch((error) => {
      console.log(error);
      dispatch(addAlert("Cannot create Reservation"));
    });
  };
};

export const fetchReservations = (userToken, status) => {
  return dispatch =>{
    return axios.get(RESERVATION_FETCH_URL+userToken+`&status=${status}`).then(response => {
      dispatch(receiveReservation(response.data));
    }).catch(error => {
      dispatch(addAlert("Cannot fetch reservation"));
    });
  };
};

export const destroyReservation = userToken => {
  return dispatch => {
    return axios.delete(RESERVATION_URL, {data: {userToken}}).then(response => {
      dispatch(removeReservation());
    }).catch((error) => {
      console.log(error);
      dispatch(addAlert("Cannot cancel Reservation"));
    });
  };
};

const removeReservation = () => ({
  type: REMOVE_RESERVATION
});

const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
});
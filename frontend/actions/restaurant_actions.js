import { SEARCH_URL, INDEX_URL } from '../util/restaurant_api_util';
export const SEARCH_RESTAURANTS = "SEARCH_RESTAURANTS";
export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
import axios from 'axios';
import { addAlert } from './alerts_actions';

exports.search = searchString => {
  return function (dispatch) {
    console.log(SEARCH_URL+searchString);
    return axios.get(SEARCH_URL+searchString).then((response) => {
      dispatch(receiveSearchRestaurants(response.data.restaurants));
    }).catch((errors) => {
      dispatch(addAlert("some error"));
    });
  };
};

exports.restaurantIndex = () =>  {
  return function (dispatch) {
    return axios.get(INDEX_URL).then((response) => {
      dispatch(receiveRestaurants(response.data.restaurants));
    }).catch((errors) => {
      dispatch(addAlert("some error"));
    });
  };
};

const receiveSearchRestaurants = (restaurants) => {
  return {
    type: SEARCH_RESTAURANTS,
    restaurants
  };
};
const receiveRestaurants = (restaurants) => {
  return {
    type: RECEIVE_RESTAURANTS,
    restaurants
  };
};
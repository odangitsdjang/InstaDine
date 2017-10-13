import { SEARCH_URL } from '../util/restaurant_api_util';
export const SEARCH_RESTAURANTS = "SEARCH_RESTAURANTS";
import axios from 'axios';
import { addAlert } from './alerts_actions';

exports.search = searchString => {
  return function (dispatch) {
    console.log(SEARCH_URL+searchString);
    return axios.get(SEARCH_URL+searchString).then((response) => {
      dispatch(receiveRestaurants(response.data.restaurants));
    }).catch((errors) => {
      dispatch(addAlert("some error"));
    });
  };
};

const receiveRestaurants = (restaurants) => {
  return {
    type: SEARCH_RESTAURANTS,
    restaurants
  };
};
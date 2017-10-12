import { SEARCH_URL } from '../util/restaurant_api_util';
export const SEARCH_RESTAURANTS = "SEARCH_RESTAURANTS";
import axios from 'axios';

exports.search = searchString => {
  return function (dispatch) {
    return axios.get(SEARCH_URL+searchString).then((response) => {
      dispatch(receiveRestaurants(response.data.restaurants));
    });
  };
};

const receiveRestaurants = (restaurants) => {
  return {
    type: SEARCH_RESTAURANTS,
    restaurants
  };
};
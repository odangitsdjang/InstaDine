import { combineReducers } from 'redux';
import { DISPLAY_RESTAURANT } from '../actions/restaurant_actions';

const displayReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case DISPLAY_RESTAURANT: 
      return action.restaurantId;
    default:
      return state;
  }
};

export default displayReducer;
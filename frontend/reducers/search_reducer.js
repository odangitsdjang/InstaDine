import { SEARCH_RESTAURANTS } from '../actions/restaurant_actions';

let defaultState = {
  restaurants: null
};

const SearchReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SEARCH_RESTAURANTS:
      return { restaurants: action.restaurants };
    default:
      return state;
  }
};

export default SearchReducer;
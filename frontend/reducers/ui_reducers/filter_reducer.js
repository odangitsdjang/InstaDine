import { RECEIVE_FILTER } from '../../actions/ui_actions';

const _initialState = { seats: null, wait: null };

const filterReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_FILTER:
      const newState = Object.assign({}, state);
      newState[action.filterType] = action.filter;
      return newState;
    default:
      return state;
  }
};

export default filterReducer;
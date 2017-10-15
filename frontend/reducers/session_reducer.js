import { REMOVE_RESERVATION } from '../actions/reservation_actions'; 

let defaultState = {
  currentUser: null,
  token: null
};

const SessionReducer = (state=defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REMOVE_RESERVATION:
      const newState = Object.assign({}, state);
      newState.currentUser.reservation = [];
      return newState;
    case 'AUTH_USER':
      return {
        token: action.token,
        currentUser: action.currentUser
      };
    case 'UNAUTH_USER':
      return defaultState;
    default:
      return state;
  }
};

export default SessionReducer;
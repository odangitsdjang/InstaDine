import { REMOVE_RESERVATION } from '../actions/reservation_actions'; 

let defaultState = {
  currentUser: null,
  token: null
};

const SessionReducer = (state=defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'AUTH_USER':
      return {
        token: action.response.token,
        currentUser: action.response.currentUser
      };
    case 'UNAUTH_USER':
      return defaultState;
    default:
      return state;
  }
};

export default SessionReducer;
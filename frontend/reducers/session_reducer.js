// import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
// import merge from 'lodash/merge';

let defaultState = {
  user_id: undefined
};

const SessionReducer = (state=defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'AUTH_USER':
      return {
        token: action.token,
        currentUser: action.currentUser
      };
    case 'UNAUTH_USER':
      return {
        user_id: undefined
      };
    default:
      return state;
  }
};

export default SessionReducer;
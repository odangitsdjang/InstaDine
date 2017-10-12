let defaultState = {
  user_id: undefined,
  currentUser: null
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
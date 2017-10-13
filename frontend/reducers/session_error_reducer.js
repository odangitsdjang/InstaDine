let defaultState = {
  errors: null
};

const SessionErrorReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'ADD_ALERT':
      return{
        errors: action.errors
      };
    case 'REMOVE_ALERT':
      return {
        errors: undefined
      };
    default:
      return state;
  }
};

export default SessionErrorReducer;
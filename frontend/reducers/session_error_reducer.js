let defaultState = {
  error: null
};

const SessionErrorReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'ADD_ALERT':
    if (typeof action.error === "string"){
        return{
          sessionErrors: action.error
        };
      }else{
        return {
          sessionErrors: action.error.response.data
        };
      }
    case 'REMOVE_ALERT':
      return {
        sessionErrors: undefined
      };
    default:
      return state;
  }
};

export default SessionErrorReducer;
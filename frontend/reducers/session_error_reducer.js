let defaultState = {
  errors: null
};

const SessionErrorReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'ADD_ALERT':
    if (typeof action.errors === "string"){
        return{
          errors: action.errors
        };
      }else{
        return {
          errors: action.errors.response.data
        };
      }
    case 'REMOVE_ALERT':
      return {
        errors: undefined
      };
    default:
      return state;
  }
};

export default SessionErrorReducer;
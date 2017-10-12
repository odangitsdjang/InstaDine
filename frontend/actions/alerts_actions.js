exports.addAlert = error => {
  return {
    type: 'ADD_ALERT',
    error
  };
};

exports.removeAlert = (id) => {
  return {
    type: 'REMOVE_ALERT',
    id
  };
};
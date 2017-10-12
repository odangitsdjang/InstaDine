exports.addAlert = errors => {
  return {
    type: 'ADD_ALERT',
    errors
  };
};

exports.removeAlert = (id) => {
  return {
    type: 'REMOVE_ALERT'
  };
};
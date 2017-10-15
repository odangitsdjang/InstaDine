export const productionUrl = `https://instadine.herokuapp.com/v1`;
let API_URL = 'http://localhost:3000/v1';

exports.SIGNUP_URL = `${productionUrl}/signup`;
exports.LOGIN_URL = `${productionUrl}/login`;
exports.USER_URL = `${productionUrl}/users`;
// exports.RESERVATION_URL = `${productionUrl}/reservations`;
exports.RESERVATION_URL = `${API_URL}/reservations/?userToken=`;
// exports.SIGNUP_URL = `${API_URL}/signup`;
// exports.USER_URL = `${API_URL}/users`;
// exports.LOGIN_URL = `${API_URL}/login`;

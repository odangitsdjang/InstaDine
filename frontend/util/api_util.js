export const productionUrl = `https://instadine.herokuapp.com/v1`;
let API_URL = 'http://localhost:3000/v1';

exports.SIGNUP_URL = `${API_URL}/signup`;
exports.LOGIN_URL = `${API_URL}/login`;
exports.USER_URL = `${API_URL}/users`;
exports.RESERVATION_URL = `${API_URL}/reservations`;
exports.RESERVATION_FETCH_URL =`${API_URL}/reservations/fetch?userToken=`;
exports.RESERVATION_HISTORY_URL =`${API_URL}/reservations/history?userToken=`;
// exports.RESERVATION_URL = `${API_URL}/reservations`;
// exports.SIGNUP_URL = `${API_URL}/signup`;
// exports.USER_URL = `${API_URL}/users`;
// exports.LOGIN_URL = `${API_URL}/login`;

export const RECEIVE_SEAT_FILTER = 'RECEIVE_SEAT_FILTER';
export const RECEIVE_WAIT_FILTER = 'RECEIVE_WAIT_FILTER';

export const setFilter = (type, filter) => ({
  type: type === 'seats' ? RECEIVE_SEAT_FILTER : RECEIVE_WAIT_FILTER,
  filter
});


export const RECEIVE_FILTER = 'RECEIVE_SEAT_FILTER';

export const setFilter = (filterType, filter) => ({
  type: RECEIVE_FILTER,
  filterType,
  filter
});


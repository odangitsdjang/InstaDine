import { 
  RECEIVE_RESERVATION,
  REMOVE_RESERVATION
} from '../../actions/reservation_actions';

const reservationsReducer = (state = null, action) => {
  switch(action.type) {
    case RECEIVE_RESERVATION:
      return action.reservation;
    case REMOVE_RESERVATION:
      return null;
    default: 
      return state;
  }
};

export default reservationsReducer;
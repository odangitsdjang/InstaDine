import { 
  RECEIVE_RESERVATION 
} from '../../actions/reservation_actions';

const reservationsReducer = (state = null, action) => {
  switch(action.type) {
    case RECEIVE_RESERVATION:
      return action.reservation;
    default: 
      return state;
  }
};

export default reservationsReducer;
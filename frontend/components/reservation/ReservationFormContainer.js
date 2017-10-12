import { connect } from 'react-redux';
import { createReservation } from '../../actions/reservation_actions';
import ReservationForm from './ReservationForm';

const mapStateToProps = state => ({
  state: state,
  userToken: state.session.token
});

const mapDispatchToProps = dispatch => ({
  createReservation: (reservation, userToken) => (
    dispatch(createReservation(reservation, userToken))
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);
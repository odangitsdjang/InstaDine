import { connect } from 'react-redux';
import { createReservation } from '../../actions/reservation_actions';
import ReservationForm from './ReservationForm';

const mapStateToProps = state => ({
  userToken: state.session.token
});

const mapDispatchToProps = dispatch => ({
  createReservation: reservation => dispatch(createReservation(reservation))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);
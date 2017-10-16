import { connect } from 'react-redux';
import History from './History';
import {fetchReservations} from '../../actions/reservation_actions';

const mapStateToProps = state => ({
  userToken: state.session.token
});

const mapDispatchToProps = dispatch => ({
  fetchReservations: (userToken, status) => dispatch(fetchReservations(userToken, status))
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
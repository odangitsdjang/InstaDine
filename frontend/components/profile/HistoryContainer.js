import { connect } from 'react-redux';
import History from './History';
import {fetchReservationHistory} from '../../actions/reservation_actions';

const mapStateToProps = state => ({
  reservations: fetchReservationHistory(state.session.token)
});

export default connect(mapStateToProps, null)(History);
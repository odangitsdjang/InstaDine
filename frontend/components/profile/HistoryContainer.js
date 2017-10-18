import { connect } from 'react-redux';
import History from './History';
import { fetchReservationHistory } from '../../actions/reservation_actions';

const mapStateToProps = state => ({
  userToken: state.session.token,
  restaurants: state.entities.restaurants,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchHistory: userToken => fetchReservationHistory(userToken)
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
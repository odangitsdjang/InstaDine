import { connect } from 'react-redux';
import History from './History';

const mapStateToProps = state => ({
  reservations: state.session.currentUser.reservation,
  restaurants: state.entities.restaurants
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(History);
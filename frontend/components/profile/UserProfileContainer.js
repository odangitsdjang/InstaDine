import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import { logoutUser } from '../../actions/session_actions';
import { updateUser } from '../../actions/user_actions';

const mapStateToPatch = state => ({
  user: state.session.currentUser,
  userToken: state.session.token,
  reservation: state.session.currentUser.reservation,
  restaurants: state.entities.restaurants
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
  updateUser: (user, userToken) => dispatch(updateUser(user, userToken))
});

export default connect(
  mapStateToPatch, 
  mapDispatchToProps
)(UserProfile);

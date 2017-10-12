import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import { logoutUser } from '../../actions/session_actions';

const mapStateToPatch = state => ({
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(
  mapStateToPatch, 
  mapDispatchToProps
)(UserProfile);

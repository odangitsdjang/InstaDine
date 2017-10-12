import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import { logoutUser } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(null, mapDispatchToProps)(UserProfile);

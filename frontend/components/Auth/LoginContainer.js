import { connect } from 'react-redux';
import { loginUser, clearErrors, logoutUser } from '../../actions/session_actions';
import { removeAlert } from '../../actions/alerts_actions';
import Login from './Login';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: user => dispatch(loginUser(user)),
    removeAlert: () => dispatch(removeAlert()),
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
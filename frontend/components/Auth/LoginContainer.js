import { connect } from 'react-redux';
import { loginUser, clearErrors, logoutUser } from '../../actions/session_actions';
import Login from './Login';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: user => dispatch(loginUser(user)),
    clearErrors: () => dispatch(clearErrors()),
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
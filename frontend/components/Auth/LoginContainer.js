import { connect } from 'react-redux';
import { loginUser, clearErrors, logoutUser } from '../../actions/session_actions';
import Signup from './Signup';

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
)(Signup);
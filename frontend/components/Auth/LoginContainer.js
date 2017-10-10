import { connect } from 'react-redux';
import { loginUser, clearErrors } from '../../actions/session_actions';
import Signup from './Signup';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: user => dispatch(loginUser(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
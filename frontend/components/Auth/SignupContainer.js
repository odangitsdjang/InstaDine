import { connect } from 'react-redux';
import { signupUser, clearErrors } from '../../actions/session_actions';
import Signup from './Signup';

const mapStateToProps = (state) => {
  // return {
  //   loggedIn: Boolean(state.session.currentUser),
  //   errors: state.errors.session
  // };
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: user => dispatch(signupUser(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
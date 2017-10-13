import { connect } from 'react-redux';
import { signupUser } from '../../actions/session_actions';
import { removeAlert } from '../../actions/alerts_actions';
import Signup from './Signup';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: user => dispatch(signupUser(user)),
    removeAlert: () => dispatch(removeAlert())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

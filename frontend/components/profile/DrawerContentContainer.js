import { connect } from 'react-redux';
import DrawerContent from './DrawerContent';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
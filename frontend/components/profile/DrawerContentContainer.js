import { connect } from 'react-redux';
import DrawerContent from './DrawerContent';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
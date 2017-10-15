import { connect } from 'react-redux';
import Filter from './Filter';
import { setFilter } from '../../actions/ui_actions';

const mapStateToProps = state => ({
  uiFilter: state.ui.filter,
  state
});

const mapDispatchToProps = dispatch => ({
  setFilter: (type, filter) => dispatch(setFilter(type, filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
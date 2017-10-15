import { connect } from 'react-redux';
import Filter from './Filter';
import setFilter from '../../actions/ui_actions';

const mapDispatchToProps = dispatch => ({
  setFilter: (type, filter) => dispatch(setFilter(type, filter))
});

export default (null, mapDispatchToProps)(Filter);
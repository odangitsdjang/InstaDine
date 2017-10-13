import { connect } from 'react-redux';
import Search from './Search';
import { search } from '../../actions/restaurant_actions';

const mapDispatchToProps =  dispatch => ({
  search: searchResults => dispatch(search(searchResults))
});

export default connect(null, mapDispatchToProps)(Search);

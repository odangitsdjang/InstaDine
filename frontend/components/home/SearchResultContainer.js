import { connect } from 'react-redux';
import  SearchResults from './SearchResults';

const mapStateToProps = (state) => ({
  results: state.search
});

export default connect(mapStateToProps, null)(SearchResults);

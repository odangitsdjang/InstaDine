import { connect } from 'react-redux';

import MapItem from './MapItem';

const mapStateToProps = (state, ownProps) => ({
  // markers: state.entities.markers
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(MapItem);

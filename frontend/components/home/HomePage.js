import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import MapItem from './MapItem';

const mapStateToProps = (state, ownProps) => ({
  // markers: state.entities.markers
  nav: state.nav
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  goToRestaurant: addNavigationHelpers({ dispatch, state: ownProps.nav })
  
});

export default connect(mapStateToProps, mapDispatchToProps)(MapItem);

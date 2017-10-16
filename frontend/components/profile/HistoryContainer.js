import { connect } from 'react-redux';
import History from './History';

const mapStateToProps = state => {
  return {
    userToken: state.session.token,
    restaurants: state.entities.restaurants
  };
};


export default connect(mapStateToProps, null)(History);
import React, { Component } from 'react';

import { connect } from 'react-redux';
import UserProfile from './UserProfile';

const mapStateToProps = (state) => ({
  user: state.session.currentUser
  // restaurant: state.restaurant
});

const mapDispatchToProps = ({

});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(UserProfile);
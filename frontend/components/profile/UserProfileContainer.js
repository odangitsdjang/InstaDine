import React, { Component } from 'react';
import { logoutUser } from '../../actions/session_actions';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';

const mapStateToProps = (state) => ({
  user: state.session.currentUser
  // restaurant: state.restaurant
});

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(UserProfile);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createReservation} from '../../actions/reservation_actions';
import RestaurantItem from './RestaurantItem';

const mapStateToProps = (state) => ({
  user: state.session.currentUser,
  userToken: state.session.token

  // restaurant: state.restaurant
});

const mapDispatchToProps = dispatch => ({
  createReservation: (reservation, userToken) => dispatch(createReservation(reservation, userToken))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantItem);

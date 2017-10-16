import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createReservation, destroyReservation} from '../../actions/reservation_actions';
import RestaurantItem from './RestaurantItem';

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser,
    userToken: state.session.token,
    restaurants: state.entities.restaurants,
    restaurantId: state.ui.display,
    reservation: state.entities.reservation
  };
};


const mapDispatchToProps = dispatch => ({
  createReservation: (reservation, userToken) => dispatch(createReservation(reservation, userToken)),
  destroyReservation: userToken => dispatch(destroyReservation(userToken))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantItem);

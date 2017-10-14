import React, { Component } from 'react';

import { connect } from 'react-redux';
import RestaurantItem from './RestaurantItem';

const mapStateToProps = (state) => ({
  restaurantId: state.display,
  restaurants: state.entities.restaurants
});

const mapDispatchToProps = ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantItem);

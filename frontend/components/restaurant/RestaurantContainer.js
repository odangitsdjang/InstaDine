import React, { Component } from 'react';

import { connect } from 'react-redux';
import RestaurantItem from './RestaurantItem';

const mapStateToProps = (state) => ({
  // user: state.user
  // restaurant: state.restaurant
});

const mapDispatchToProps = ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantItem);

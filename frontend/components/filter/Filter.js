import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

class Filter extends Component {
  constructor(props){
    super(props);
    this.setFilter = this.setFilter.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  setFilter(filterType, filter){
    return event => {
      const filters = this.props.uiFilter;
      
      let newFilter;
      if (filters[filterType] === filter ){
        newFilter = null;
      }
      else {
        newFilter = filter;
      }

      this.props.setFilter(filterType, newFilter);
    };
  }

  renderSeatButtons(){
    const seatFilter = this.props.uiFilter.seats;

    const seatLabels = ['0-2', '3-4', '5-6', '7-8'];
    return seatLabels.map((label, i) => {
      return (
        <TouchableOpacity
          key={i}
          onPress={this.setFilter('seats', i)}
          style={seatFilter === i ? styles.selectedButton : styles.button}>

          <Text
            style={seatFilter === i ? styles.selectedText : styles.buttonText}>

            {label}
          </Text>
        </TouchableOpacity>
      );
    });
  }

  renderWaitButtons(){
    const waitFilter = this.props.uiFilter.wait;

    const waitLabels = ['0', '5-15', '15-25', '25-35'];
    return waitLabels.map((label, i) => {
      return (
        <TouchableOpacity
          key={i}
          onPress={this.setFilter('wait', i)}
          style={waitFilter === i ? styles.selectedButton : styles.button}>

          <Text style={waitFilter === i ? styles.selectedText : styles.buttonText}>
            {label}
          </Text>
        </TouchableOpacity>
      );
    });
  }

  clearFilters() {
    this.props.setFilter('seats', null);
    this.props.setFilter('wait', null);
    this.props.closeFilter();
  }

  render(){
    return (
      <Modal
        isVisible={this.props.isOpen}
        backdropColor={'black'}
        backdropOpacity={.7}
        animationIn={'zoomInDown'}
        animationOut={'zoomOutUp'}
        animationInTiming={1000}
        animationInTiming={1000}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}
        onBackdropPress={this.props.closeFilter}
      >
        <View style={styles.filterContent}>
          <View style={styles.filterGroups}>
            <Text style={styles.label}>Number of Seats Available</Text>
            <View style={styles.options}>
              { this.renderSeatButtons() }
            </View>
          </View>

          <View style={styles.filterGroups}>
            <Text style={styles.label}>Wait Times (minutes)</Text>
            <View style={styles.options}>
              { this.renderWaitButtons() }
            </View>
          </View>

          <TouchableOpacity 
            onPress={this.clearFilters}
            style={styles.clearButton}>

            <Text>Clear Filters</Text>
          </TouchableOpacity>
        </View>

      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  filterContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    padding: 10,
    fontSize: 18
  },
  filterGroups: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedButton: {
    backgroundColor: '#1392B5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'rgb(166, 166, 167)',
    borderWidth: 1,
    padding: 10,
    margin: 3,
    width: 70
  },
  button: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'rgb(166, 166, 167)',
    borderWidth: 1,
    padding: 10,
    margin: 3,
    width: 70
  },
  selectedText: {
    color: 'white'
  },
  buttonText: {
    color: 'black'
  },
  clearButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'rgb(166, 166, 167)',
    borderWidth: 1,
    padding: 10,
    margin: 15,
    width: 150
  }
});

export default Filter;
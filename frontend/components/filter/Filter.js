import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const Filter = ({...props}) => {
  const seatLabels = ['0-2', '3-4', '5-6', '7-8'];
  const seatsOptions = seatLabels.map((label, i) => {
    return (
      <TouchableOpacity
        key={i}
        style={styles.button}
        onPress={props.setFilter('filterSeats', i)}
        style={props.seatsFilter === i ? styles.selectedButton : styles.button}>

        <Text style={props.seatsFilter === i ? styles.selectedText : styles.buttonText}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  });
  
  const waitLabels =['0', '5-15', '15-25', '25-35' ];
  waitOptions = waitLabels.map((label, i) => {
    return (
      <TouchableOpacity
        key={i}
        style={styles.button}
        onPress={props.setFilter('filterWait', i)}
        style={props.waitFilter === i ? styles.selectedButton : styles.button}>

        <Text style={props.waitFilter === i ? styles.selectedText : styles.buttonText}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  });

  return (
    <Modal
      isVisible={props.isOpen} 
      backdropColor={'black'}
      backdropOpacity={.7}
      animationIn={'zoomInDown'}
      animationOut={'zoomOutUp'}
      animationInTiming={1000}
      animationInTiming={1000}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={1000}
      onBackdropPress={props.toggleFilter('close')}
    >
      <View style={styles.filterContent}>
        <View style={styles.filterGroups}>
          <Text style={styles.label}>Number of Seats Available</Text>
          <View style={styles.options}>
            {seatsOptions}
          </View>
        </View>

        <View style={styles.filterGroups}>
          <Text style={styles.label}>Wait Times (minutes)</Text>
          <View style={styles.options}>
            {waitOptions}
          </View>
        </View>
      </View>

    </Modal>
  );
};

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
});

export default Filter;
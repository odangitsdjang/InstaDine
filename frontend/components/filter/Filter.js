//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

// create a component
const filterModal = ({ isOpen, setFilter }) => {
  const pickerOptions = [];
  for (let i = 0; i < 4; i++) {
    pickerOptions.push(
      <TouchableOpacity
        key={i}
        style={styles.seatsButton}
      >
        <Text>{i}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});


filterModal(){

  return (
    <Modal
      isVisible={this.state.isFilterOpen}
      backdropColor={'black'}
      backdropOpacity={.7}
      animationIn={'zoomInDown'}
      animationOut={'zoomOutUp'}
      animationInTiming={1000}
      animationInTiming={1000}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={1000}
      onBackdropPress={this.closeFilter}
    >
      <View style={styles.filterContent}>
        <Text>FILTER MODAL</Text>
        <View style={styles.picker}>
          {pickerOptions}
        </View>
      </View>

    </Modal>
  );
}
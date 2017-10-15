import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const FilterModal = ({...props}) => {
  const pickerOptions = [];
  for (let i = 0; i < 4; i++) {
    pickerOptions.push(
      <TouchableOpacity
        key={i}
        /* style={styles.seatsButton} */
      >
        <Text>{i}</Text>
      </TouchableOpacity>
    );
  }
  
  console.log(props);

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
        <Text>FILTER MODAL</Text>
        <View style={styles.picker}>
          {pickerOptions}
        </View>
      </View>

    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  filterContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  picker: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  seatsButton: {
    width: 50,
    borderColor: 'gray'
  }
});

export default FilterModal;
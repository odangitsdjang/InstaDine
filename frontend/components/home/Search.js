import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, TouchableOpacity, Keyboard } from 'react-native';

class Search extends Component {

  constructor(props) {
    super(props);
    this.renderRightIcon = this.renderRightIcon.bind(this);
    this.renderLeftIcon = this.renderLeftIcon.bind(this);

  }

  renderLeftIcon() {
    if (!this.props.searchActive) {
      return (
        <TouchableOpacity
          style={styles.icon}
          onPress={this.props.openDrawer}
          title='Open Drawer'>
          <Ionicons style={styles.leftIcon} name="ios-menu" size={35} />
        </TouchableOpacity>
        
      );
    } else {
      return (
        <TouchableOpacity style={styles.icon}
          onPress={() => {
            Keyboard.dismiss();
            this.props.setSearchActive(false);
          }}
        >
          <Ionicons style={styles.leftIcon} name="ios-arrow-back" size={30} />
        </TouchableOpacity>
      );
    }
  }

  renderRightIcon() {
    if (!this.props.searchActive) {
      return null;
    } else {
      return(
        <TouchableOpacity onPress={() => this.props.setSearchText("")} 
          activeOpacity={1}
          style={styles.icon} >
          <Ionicons name="ios-close" size={30} />
        </TouchableOpacity>
      );
    }
  }


  render() {
    return (
      <View style={styles.searchContainer}>
        <View style={{ flex: 5 }}></View>
        <View style={styles.search}>
          {this.renderLeftIcon()}
          <TextInput
            placeholder="Search"
            style={{ paddingLeft: 20, flex: 8 }}
            onChangeText={(searchText) => {
              this.props.typeText(searchText);
            }}
            onSubmitEditing={this.enterSearch}
            autoCorrect={false}
            onFocus={() => this.props.setSearchActive(true)}
            value={this.props.searchText}
          />
          {this.renderRightIcon()}
        </View>
        <View style={{ flex: 5 }}></View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({

  searchContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 45
  },
  search: {
    backgroundColor: 'white',
    flex: 90,
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'stretch',
    borderColor: '#fafafa',
    borderRadius: 5,
    height: 50,
  },
  leftIcon: {
    paddingLeft: 20,
    alignSelf: 'center',
  },
  icon: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  }
});

//make this component available to the app
export default Search;
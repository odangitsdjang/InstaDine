import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Keyboard } from 'react-native';

class Search extends Component {
  
  constructor(props) {
    super(props);
    this.submitSearch = this.submitSearch.bind(this);
    this.renderCancelIcon = this.renderCancelIcon.bind(this);
    this.renderSearchIcon = this.renderSearchIcon.bind(this);
    
  }

  renderSearchIcon() {
    if (!this.props.searchActive) {
      return <Ionicons style={styles.leftIcon} name="ios-search" size={20} />;
    } else {
      return (
        <TouchableHighlight style={styles.icon} 
         onPress={() => {
            Keyboard.dismiss();
            this.props.setSearchActive(false);}}
          >
          <Ionicons style={styles.leftIcon} name="ios-arrow-back" size={20} />
        </TouchableHighlight>
      );
    }
  }

  renderCancelIcon() {
    if (this.props.searchActive) {
      return (
        <TouchableHighlight onPress={() => this.props.setSearchText("") } style={styles.icon} >
          <Ionicons name="ios-close" size={20} />
        </TouchableHighlight>
      );
    } else {
      return null;
    }
  }

  submitSearch() {
    // update results by ajax calling to the backend with this.state.searchText
    this.props.search(this.props.searchText);
  }

  render() {
    return (
      <View style={styles.searchContainer}>
        <View style={{ flex: 5 }}></View>
        <View style={styles.search}>
          {this.renderSearchIcon()}
          <TextInput
            placeholder="Search"
            style={{ paddingLeft: 20, flex: 8 }}
            onChangeText={(searchText) => {
              this.submitSearch(searchText);
              this.props.setSearchText(searchText);
            }}
            onSubmitEditing={this.enterSearch}
            autoCorrect={false}
            onFocus={() => this.props.setSearchActive(true)}
            value={this.props.searchText}
          />
          {this.renderCancelIcon()}
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
    alignSelf: 'center'
  },
  icon: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  }
});

//make this component available to the app
export default Search;

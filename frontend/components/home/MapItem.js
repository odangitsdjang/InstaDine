import { MapView } from 'expo';

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, 
  TouchableOpacity, TextInput, Alert } 
         from 'react-native';
import { connect } from 'react-redux';

import { search } from '../../actions/restaurant_actions';

import Search from './Search';
import SearchResults from './SearchResults';
/* current todos :
 4. load only the markers in the given region 
*/

// Change initialRegion to this.props.user.region
const { width, height } = Dimensions.get('window'); // dimension are half of the pixels of the phone specification

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const SAMPLE_MARKERS = [
  {
    latlng: { latitude: 37.777728, longitude: -122.408806 },
    name: "davids hood",
    full_address: "tight"
  },
  {
    latlng: { latitude: 37.791655, longitude: -122.394488},
    name: "jerrys hood",
    full_address: "dont come here"
  },
  {
    latlng: { latitude: 37.766648, longitude: -122.419499},
    name: "adrians hood",
    full_address: "yo..",
    
  }
];

class MapItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region:  {
        latitude: 37.78825,   // selected region
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: SAMPLE_MARKERS,
      selectedMarker: 0,
      loaded: 0,
      searchActive: false,
      searchText: ""
      
    };
    this.map = 0;
    this.onRegionChange = this.onRegionChange.bind(this);
    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
    this.renderMarkers = this.renderMarkers.bind(this);
    this.redirectRestaurant = this.redirectRestaurant.bind(this);
    this.setSearchActive = this.setSearchActive.bind(this);
    this.setSearchText = this.setSearchText.bind(this);
    this.typeText = this.typeText.bind(this);
  }

  componentDidMount() {
    // Get restaurants 

    // User's current location
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    // make markers into components
    this.setState({
      markers: this.state.markers.map((marker, i) => (
          <MapView.Marker
            key={i}
            onPress={() => this.markerClick(marker)}
            coordinate={marker.latlng}
          >
            <MapView.Callout onPress={this.redirectRestaurant}>
                <View style={styles.insideBubbleStyle}>
                  <Text>
                    {marker.name}
                  </Text>
                  <Text>
                    {marker.full_address}
                  </Text>
                </View>
            </MapView.Callout>
          </MapView.Marker>
      )), loaded: 1
    });
  }

  redirectRestaurant() {
    //  not working
    // <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}/>
    // this.props.navigation.dispatch({ type: 'Signup' });
    this.props.goToRestaurant.dispatch( {type: 'RestaurantContainer'} );
  }

  markerClick(marker) {
    this.setState({
      selectedMarker: marker, region: {
        latitude: marker.latlng.latitude, longitude: marker.latlng.longitude,
        latitudeDelta: this.state.region.latitudeDelta, 
        longitudeDelta: this.state.region.longitudeDelta, 
      }
    });
    // move to coordinate with duration
    this.map.animateToCoordinate(marker.latlng, 300);  

  }

  onRegionChange(region) {
    // console.log(this.state);
  }
  
  renderMarkers() {
    if (this.state.loaded) return this.state.markers;
  }

  onRegionChangeComplete(region) {
    this.setState({ region });
    // this.setState({ markers: this.state.markers.map(marker => (
    //     <MapView.Marker
    //       coordinate={marker.latlng}
    //       title={marker.title}
    //       description={marker.description}
    //     />
    // ))});
    // should eventually calculate area within the map area, update state, which should hopefully re render markers

  }

  renderMap() {
    if (!this.state.searchActive) {
      return (
        <MapView style={styles.mapInitial}
          showsMyLocationButton={true}
          onPress={() => this.setState({ selectedMarker: 0 })}
          ref={(map) => { this.map = map; }}
          provider="google"
          initialRegion={this.state.region}
          loadingEnabled={true}
          showsUserLocation={true}
          onRegionChangeComplete={this.onRegionChangeComplete}
        >
          {this.renderMarkers()}
        </MapView>
      );
    }
  }

  setSearchActive(bool) {
    this.setState({ searchActive: bool });
  }

  typeText(text) {
    this.props.search(text);
    this.setState({ searchText: text });
  }

  setSearchText(text) {
    console.log(this.state.searchText);
    this.setState({ searchText: text });
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderMap() }
        <Search setSearchText={this.setSearchText} 
                typeText={this.typeText} 
                searchActive={this.state.searchActive} 
                searchText={this.state.searchText} 
                setSearchActive={this.setSearchActive}/>
        <SearchResults searchActive={this.state.searchActive}
          results={this.props.results}
          searchText={this.state.searchText} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#4b4b4b'
  }, 
  mapInitial: {
    paddingTop: 25,
    flex: 1
  }

});


const mapStateToProps = state => ({
  results: state.search.restaurants
});

const mapDispatchToProps = dispatch => ({ 
  search: searchText => dispatch(search(searchText))
});

export default connect(mapStateToProps, mapDispatchToProps)(MapItem);
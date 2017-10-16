import { MapView } from 'expo';

import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button, Dimensions,
  TouchableOpacity, TextInput, Alert
}
  from 'react-native';

/* current todos :
 4. load only the markers in the given region 
*/

// Change initialRegion to this.props.user.region
const { width, height } = Dimensions.get('window'); // dimension are half of the pixels of the phone specification

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.005;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class RestaurantShowMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,   // selected region
        longitude: -122.4324,
        latitudeDelta: 0.05,
        longitudeDelta: 0.0421,
      },
      selectedMarker: 0,
      loaded: 0,
      searchActive: false,
      searchText: ""

    };
    this.map = 0;
    this.renderMarkers = this.renderMarkers.bind(this);
    this.makeMarker = this.makeMarker.bind(this);
  }

  componentWillReceiveProps(newProps) {
    // User's current location
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: newProps.restaurant.latlng.latitude,
            longitude: newProps.restaurant.latlng.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    // make markers into components

    if (this.props.restaurant.id && newProps.restaurant.id !== this.props.restaurant.id) {
      // console.log("Got in!");
      this.setState({
        markers: this.makeMarker(newProps.restaurant),
        loaded: 1
      });
    }
  }

  componentDidMount() {
    // User's current location
    // console.log("Did Mount", this.props.restaurant);
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: this.props.restaurant.latlng.latitude,
            longitude: this.props.restaurant.latlng.longitude,
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
      markers: this.makeMarker(this.props.restaurant), 
      loaded: 1
    });
  }

  makeMarker(marker){
    return(
      <MapView.Marker
        key={marker.id}
        coordinate={marker.latlng}
      >
        <MapView.Callout onPress={this.redirectRestaurant}>
          <View style={styles.insideBubbleStyle}>
            <Text>
              {marker.name}
            </Text>
          </View>
        </MapView.Callout>
      </MapView.Marker>
    );
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

  renderMarkers() {
    if (this.state.loaded) return this.state.markers;
  }

  renderMap() {
    return (
      <MapView style={styles.mapInitial}
        showsMyLocationButton={true}
        onPress={() => this.setState({ selectedMarker: 0 })}
        ref={(map) => { this.map = map; }}
        provider="google"
        region={this.state.region}
        loadingEnabled={true}
        showsUserLocation={true}
        pitchEnables={false}
        /* rotateEnabled={false} */
        /* scrollEnabled={false} */
        /* zoomEnabled={false} */
      >
        {this.renderMarkers()}
      </MapView>
    );
  }

  render() {
    if(this.props.restaurant){
      return (
        <View style={styles.container}>
          {this.renderMap()}
        </View>
      );
    }else{
      return(
        <View style={styles.container}>
          <Text>
            Loading...
          </Text>
        </View>
      );
    }
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

export default RestaurantShowMap;

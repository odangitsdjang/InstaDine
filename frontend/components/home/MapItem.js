import { MapView } from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, TouchableOpacity, TextInput } from 'react-native';
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
    title: "davids hood",
    description: "tight"
  },
  {
    latlng: { latitude: 37.791655, longitude: -122.394488},
    title: "jerrys hood",
    description: "dont come here"

  },
  {
    latlng: { latitude: 37.766648, longitude: -122.419499},
    title: "adrians hood",
    description: "yo..",
    
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
      searchText: "Search"
    };
    this.map = 0;
    this.onRegionChange = this.onRegionChange.bind(this);
    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
    this.renderMarkers = this.renderMarkers.bind(this);
    this.redirectRestaurant = this.redirectRestaurant.bind(this);
    
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
                    {marker.title}
                  </Text>
                  <Text>
                    {marker.description}
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

  render() {
    // console.log(this.state);
    return (
      <View style={styles.container}>
        <MapView style={styles.mapInitial} 
          showsMyLocationButton={true}
          onPress={()=>this.setState({selectedMarker: 0})}
          ref={ (map)=> { this.map = map; } }
          provider="google"
          initialRegion={this.state.region}
          loadingEnabled={true}
          showsUserLocation={true}
           onRegionChangeComplete={this.onRegionChangeComplete}
           >
            { this.renderMarkers()  }
        </MapView>
        <View style={styles.searchContainer}>
          <TextInput style={styles.search}
            onChangeText={(searchText) => this.setState({ searchText })}
            value={this.state.searchText} />
        </View>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#2c3e50'
  }, 
  mapInitial: {
    paddingTop: 25,
    flex: 1
  }, 
  searchContainer: {
    position: 'absolute',
    top: 50,
    alignContent: 'stretch',
  },
  search: {
    backgroundColor: 'red',
    height: 40 
  }
});

export default MapItem;
/*


 */
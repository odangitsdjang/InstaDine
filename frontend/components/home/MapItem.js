import { MapView } from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// current thoughts : selectedMarker doesnt reset when clicking outside the marker after clicking it once



// Change initialRegion to this.props.user.region
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
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: SAMPLE_MARKERS,
      selectedMarker: 0,
      loaded: 0
    };
    this.onRegionChange = this.onRegionChange.bind(this);
    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
    this.renderMarkers = this.renderMarkers.bind(this);
  }

  componentDidMount() {

    this.setState({
      markers: this.state.markers.map((marker, i) => (
          <MapView.Marker
            key={i}
            onPress={() => this.setState({ selectedMarker: marker })}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
      )), loaded: 1
    });
  }

  onRegionChange(region) {
    
  }
  
  markerOpen() {
    return 1;
  }

  renderMarkers() {
    if (this.state.loaded) return this.state.markers;
  }

  onRegionChangeComplete(region) {
    this.setState({ region });
    console.log(this.state);

    // this.setState({ markers: this.state.markers.map(marker => (
    //   <Button>
    //     <MapView.Marker
    //       coordinate={marker.latlng}
    //       title={marker.title}
    //       description={marker.description}
    //     />
    //   </Button>
    // ))});
    // should eventually calculate area within the map area, update state, which should hopefully re render markers

  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapInitial} 
          provider="google"
          initialRegion={this.state.region}
           onRegionChangeComplete={this.onRegionChangeComplete}
           >
            { this.renderMarkers()  }
        </MapView>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#2c3e50',
  }, 
  mapInitial: {
    paddingTop: 25,
    flex: 1
  }
});

export default MapItem;

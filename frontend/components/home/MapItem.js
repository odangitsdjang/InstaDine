import { MapView } from 'expo';

import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacity, 
  TextInput, 
  Alert, 
  Image, 
  Button,
  TouchableWithoutFeedback 
} from 'react-native';
import { connect } from 'react-redux';
import { search, restaurantIndex, displayRestaurant } from '../../actions/restaurant_actions';
import Modal from 'react-native-modal';

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
  static navigationOptions = {
    drawerLabel: 'Continue Browsing'
  };

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
      searchText: "",
      isFilterOpen: false
    };
    this.map = 0;
    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
    this.renderMarkers = this.renderMarkers.bind(this);
    this.redirectRestaurant = this.redirectRestaurant.bind(this);
    this.setSearchActive = this.setSearchActive.bind(this);
    this.setSearchText = this.setSearchText.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.typeText = this.typeText.bind(this);
    this.closeFilter = this.closeFilter.bind(this);
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
    
    const mapItem = this;
    
    this.props.restaurantIndex().then(
      function(){
        let restaurants = Object.keys(mapItem.props.restaurants).map(restaurantId => {
          return mapItem.props.restaurants[restaurantId];
        });

        mapItem.setState({
          markers: restaurants.map((markerObj, i) => {
            const marker = markerObj.latlng;
            return (
              <MapView.Marker
                key={i}
                onPress={() => mapItem.markerClick(marker)}
                coordinate={marker}
              >
                <MapView.Callout onPress={() => mapItem.redirectRestaurant(markerObj)}>
                  <View style={styles.insideBubbleStyle}>
                    <Text>
                      {markerObj.name}
                    </Text>
                    <Text>
                      {markerObj.full_address}
                    </Text>
                  </View>
                </MapView.Callout>
              </MapView.Marker>
            );
          }), loaded: 1
        });
      }
    );
  }

  redirectRestaurant(marker) {
    this.props.displayRestaurant(marker);
  }

  markerClick(marker) {
    this.setState({
      selectedMarker: marker, region: {
        // latitude: marker.latlng.latitude, longitude: marker.latlng.longitude,
        latitude: marker.latitude, longitude: marker.longitude,
        latitudeDelta: this.state.region.latitudeDelta, 
        longitudeDelta: this.state.region.longitudeDelta, 
      }
    });
    // move to coordinate with duration
    // this.map.animateToCoordinate(marker.latlng, 300);  
    this.map.animateToCoordinate(marker, 300);  
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
          onRegionChangeComplete={this.onRegionChangeComplete}>

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
    this.setState({ searchText: text });
  }

  openDrawer(){
    this.props.navigation.navigate('DrawerOpen');
  }
  
  toggleFilter() {

  }

  toggleFilter(){
    this.setState({isFilterOpen: !this.state.isFilterOpen});
  }

  filterModal(){
    const pickerOptions = [];
    for (let i = 0; i < 4; i++){
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
            { pickerOptions }     
          </View>
        </View>
        
      </Modal>
    );
  }

  closeFilter(){
    this.setState({isFilterOpen: false});
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderMap() }
        <Search setSearchText={this.setSearchText} 
                typeText={this.typeText} 
                openDrawer={this.openDrawer}
                searchActive={this.state.searchActive} 
                searchText={this.state.searchText} 
                setSearchActive={this.setSearchActive}/>
        <SearchResults searchActive={this.state.searchActive}
          results={this.props.results}
          searchText={this.state.searchText} 
          redirectRestaurant={this.redirectRestaurant}/>
        <TouchableOpacity
          onPress={this.redirectLogin}
          style={styles.button}
          raised={true}>
          <Text style={styles.filter}>Filter</Text>
        </TouchableOpacity>

        <Button onPress={this.toggleFilter} title='Filter'/>

        { this.filterModal() }
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
  },
  button: {
    padding: 18,
    borderRadius: 15,
    margin: 5,
    width: 85,
    position: 'absolute',
    bottom: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgb(240,240,240)',
    backgroundColor: 'rgba(230,230,230,0.99)'
  },
  menuIcon: {
    width: 50,
    height: 50
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


const mapStateToProps = state => ({
  results: state.search.restaurants,
  restaurants: state.entities.restaurants
});

const mapDispatchToProps = dispatch => ({ 
  search: searchText => dispatch(search(searchText)),
  restaurantIndex: () => dispatch(restaurantIndex()),
  displayRestaurant: restaurantId => dispatch(displayRestaurant(restaurantId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MapItem);
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
import { setFilter } from '../../actions/ui_actions';
import FilterContainer from '../filter/FilterContainer';

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
      searchText: "",
      isFilterOpen: false,
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
    this.renderFilter = this.renderFilter.bind(this);
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

    this.props.restaurantIndex().then(
      () => this.setState({ markers: Object.values(this.props.restaurants), loaded: 1 })
    );
  }

  componentWillReceiveProps(newProps) {
    const wait = [0, 15, 25, 35];
    const seats = [2, 4, 6, 8];
    const oldWaitFilter = this.props.filter.wait;
    const oldSeatsFilter = this.props.filter.seat;
    const newWaitFilter = newProps.filter.wait;
    const newSeatsFilter = newProps.filter.seats;

    if (this.props.restaurants && (
      newSeatsFilter !== oldSeatsFilter 
      || newWaitFilter !== oldWaitFilter)) {

        let filtered;
        const restaurants = Object.values(this.props.restaurants);
        if (newWaitFilter === null && newSeatsFilter === null) {
          filtered = restaurants;
        }
        else if (newSeatsFilter){
          filtered = restaurants.filter((marker, i) => {
            return (
              (marker.wait === 0) && (marker.seats >= seats[newSeatsFilter])
            )
          })
        }
        else {
          filtered = restaurants.filter((marker, i) => {
            return (
              marker.wait <= wait[newWaitFilter]
            )
          })
        }
        this.setState({markers: []}, () => this.setState({markers: filtered}));
    }
  }

  redirectRestaurant(markerId) {
    this.props.displayRestaurant(markerId);
  }

  markerClick(geo) {
    this.setState({
      selectedMarker: geo, region: {
        latitude: geo.latitude, longitude: geo.longitude,
        latitudeDelta: this.state.region.latitudeDelta, 
        longitudeDelta: this.state.region.longitudeDelta, 
      }
    });
    // move to coordinate with duration
    this.map.animateToCoordinate(geo, 300);  
  }
  
  renderMarkers() {
    if (this.state.loaded) { 
      return this.state.markers.map((markerObj, i) => {
        const geo = markerObj.latlng;
        return (
          <MapView.Marker
            key={i}
            onPress={() => this.markerClick(geo)}
            coordinate={geo}
          >
            <MapView.Callout onPress={() => this.redirectRestaurant(markerObj.id)}>
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
      })
    }
  }

  onRegionChangeComplete(region) {
    this.setState({ region });
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
  
  toggleFilter(type){
    if (type === 'close') {
      return () => this.setState({isFilterOpen: false});
    } 
    else {
      return () => this.setState({ isFilterOpen: !this.state.isFilterOpen });
    }
  }

  renderFilter() {
    if (!this.state.searchActive) {
      return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={this.toggleFilter()}
        style={styles.button}
        raised={true}>
        <Text style={styles.filter}>Filter</Text>
      </TouchableOpacity> );
    } else return null;
  }

  render() {
    let filterStyle;
    if (this.props.filter.wait !== null || this.props.filter.seats) {
      filterStyle = styles.selectedButton;
    }
    else { filterStyle = styles.button; }

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
        { this.renderFilter() }
       
        <FilterContainer 
          isOpen={this.state.isFilterOpen} 
          closeFilter={this.toggleFilter('close')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#4C5B61'
  }, 
  mapInitial: {
    paddingTop: 25,
    flex: 1
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 15,
    margin: 5,
    width: 85,
    position: 'absolute',
    bottom: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgb(150,150,150)',
    backgroundColor: 'rgba(40,40,40,0.99)'
  },
  selectedButton: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 15,
    margin: 5,
    width: 85,
    position: 'absolute',
    bottom: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgb(166, 166, 167)',
    backgroundColor: '#1392B5',
  },
  menuIcon: {
    width: 50,
    height: 50
  },
  filter: {
    color: 'white'
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
  restaurants: state.entities.restaurants,
  filter: state.ui.filter
});

const mapDispatchToProps = dispatch => ({ 
  search: searchText => dispatch(search(searchText)),
  restaurantIndex: () => dispatch(restaurantIndex()),
  displayRestaurant: restaurantId => dispatch(displayRestaurant(restaurantId)),
  setFilter: (type, filter) => dispatch(setFilter(type, filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(MapItem);
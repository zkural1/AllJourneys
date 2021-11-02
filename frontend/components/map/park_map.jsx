// import mapbox from 'mapbox-gl/dist/mapbox-gl-csp';
import mapbox from '!mapbox-gl'
import React from "react";
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import {ACCESS_TOKEN} from "./access_token"
mapbox.workerClass = MapboxWorker;

mapbox.accessToken = ACCESS_TOKEN

class ParkMap extends React.Component {

  componentDidMount() {
    debugger
    this.map = new mapbox.Map({
      container: "map_div2", // container ID
      style: "mapbox://styles/mapbox/outdoors-v11", // style URL
      center: this.props.location, // starting position [lng, lat]
      zoom: 13.5,
    });

    // const el = document.createElement('i');
    //         el.className = 'fas fa-map-marker-alt';
            
    const el = document.createElement('div');
            el.className = 'marker';
            
            // make a marker for each feature and add to the map
            new mapbox.Marker(el)
                .setLngLat(this.props.location)
                .addTo(this.map);
    //   container: 'map_div',
    //   style: 'mapbox://styles/mapbox/streets-v11',
    //   center: this.location
  }

  render() {
    return <div id="map_div2"></div>;
  }
}

export default ParkMap;

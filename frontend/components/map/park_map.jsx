// import mapbox from 'mapbox-gl/dist/mapbox-gl-csp';
import mapbox from '!mapbox-gl'
import React from "react";
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import {ACCESS_TOKEN} from "./access_token"
mapbox.workerClass = MapboxWorker;

mapbox.accessToken = ACCESS_TOKEN

class ParkMap extends React.Component {

  componentDidMount() {
    let zoom
    if (this.props.type==="park"){
      zoom=9
    }else{
      zoom=13.5
    }
    this.map = new mapbox.Map({
      container: "map_div2", // container ID
      style: "mapbox://styles/mapbox/outdoors-v11", // style URL
      center: this.props.location, // starting position [lng, lat]
      zoom: zoom,
    });

            
    const el = document.createElement('div');
            el.className = 'marker';
            
            // make a marker for each feature and add to the map
            new mapbox.Marker(el)
                .setLngLat(this.props.location)
                .addTo(this.map);
  }

  render() {
    return <div id="map_div2"></div>;
  }
}

export default ParkMap;

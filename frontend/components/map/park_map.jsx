// import mapbox from 'mapbox-gl/dist/mapbox-gl-csp';
import mapbox from "!mapbox-gl";
import React from "react";
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import { ACCESS_TOKEN } from "./access_token";
mapbox.workerClass = MapboxWorker;

mapbox.accessToken = ACCESS_TOKEN;

class ParkMap extends React.Component {
  componentDidMount() {
    this.map = new mapbox.Map({
      container: "map_div2", // container ID
      style: "mapbox://styles/mapbox/outdoors-v11", // style URL
      center: this.props.location, // starting position [lng, lat]
      zoom: 13.5,
    });

    //   container: 'map_div',
    //   style: 'mapbox://styles/mapbox/streets-v11',
    //   center: this.location
  }

  render() {
    return <div id="map_div2"></div>;
  }
}

export default ParkMap;
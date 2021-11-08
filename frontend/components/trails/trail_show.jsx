import React from "react"
import { Link } from 'react-router-dom';
import ParkMap from "../map/park_map";

class TrailShow extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchTrail(this.props.match.params.trailId);
    }

    render() {
        const trail = this.props.trail
        if (trail) {
            return (
            <div className="trail">
                <h1>{trail.name}</h1>
                <div className="photo-container">
                    <img src={trail.photoUrl} alt="trail"/>
                </div>
                <p>Summary: {trail.summary}</p>
                <p>Length: {trail.length}</p>
                <p>Route Type: {trail.route_type}</p>
                <div id='map_div'>
                    <ParkMap location = {[trail.lng,trail.lat]} type="trail"/>
                </div>
            </div>
        )}
        else{
            return ( 
            <div></div>
            )
        }
    }
}

export default TrailShow
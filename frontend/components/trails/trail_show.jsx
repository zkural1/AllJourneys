import React from "react"
import { Link } from 'react-router-dom';

class TrailShow extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchTrail(this.props.match.params.trailId);
    }

    render() {
        const trail = this.props.trail

        return (
            <div className="trail">
                {fi}
                <h1>{trail.name}</h1>
                <p>Summary: {trail.summary}</p>
                <p>Length: {trail.length}</p>
                <p>Route Type: {trail.route_type}</p>
            </div>
        )
    }
}

export default TrailShow
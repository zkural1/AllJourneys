import React from "react";
import ParkMap from "../map/park_map";
class ParkShow extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPark(this.props.match.params.parkId)
    }
    render (){
        const park = this.props.park
        const disp = (park ? (
            <div>
                <h1>{park.name}</h1>
                <p>Description: {park.description}</p>
                <p>Contact: {park.contact}</p>
                <p>Park Type: {park.park_type}</p>
                <div id='map_div'>
                    <ParkMap location = {[park.lng,park.lat]} />
                </div>
            </div>
        ): (
            <div>Park</div>
        ))

        return(
            <div>
                {disp}
            </div>
        )
    }
}

export default ParkShow;

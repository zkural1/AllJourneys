import { connect } from "react-redux";
import TrailShow from "./trail_show";
import { fetchTrail, clearTrails } from "../../actions/trail";

const mSTP = (state, ownProps) => {
    return {
        trail: state.entities.trails[ownProps.match.params.trailId],
    }
}

const mDTP = (dispatch) => {
    return {
        fetchTrail: trailId => dispatch(fetchTrail(trailId)),
    }
}

export default connect(mSTP, mDTP)(TrailShow)
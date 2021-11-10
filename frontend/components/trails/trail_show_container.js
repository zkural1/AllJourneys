import { connect } from "react-redux";
import TrailShow from "./trail_show";
import { fetchTrail } from "../../actions/trail";

const mSTP = (state, ownProps) => {
    return {
        trails: state.entities.trails.trails,
        park: state.entities.trails.park,
    }
}

const mDTP = (dispatch) => {
    return {
        fetchTrail: trailId => dispatch(fetchTrail(trailId)),
    }
}

export default connect(mSTP, mDTP)(TrailShow)
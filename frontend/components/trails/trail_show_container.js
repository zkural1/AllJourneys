import { connect } from "react-redux";
import TrailShow from "./trail_show";
import { fetchTrail } from "../../actions/trail";

const mSTP = (state) => ({
  currentTrail: state.entities.trails.currentTrail,
  otherTrails: state.entities.trails.otherTrails,
  park: state.entities.trails.park,
});

const mDTP = (dispatch) => ({
  fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
});

export default connect(mSTP, mDTP)(TrailShow);

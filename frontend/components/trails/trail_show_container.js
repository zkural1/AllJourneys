import { connect } from "react-redux";
import TrailShow from "./trail_show";
import { fetchTrail } from "../../actions/trail";
import { deleteReview } from "../../actions/review_actions";

const mSTP = (state) => ({
  currentTrail: state.entities.trails.currentTrail,
  otherTrails: state.entities.trails.otherTrails,
  park: state.entities.trails.park,
  currentUser: state.session.currentUser,
});

const mDTP = (dispatch) => ({
  fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
});

export default connect(mSTP, mDTP)(TrailShow);

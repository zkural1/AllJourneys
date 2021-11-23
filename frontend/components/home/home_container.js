import { connect } from "react-redux";
import Home from "./home";
import { fetchTrail } from "../../actions/trail";

const mSTP = (state) => ({
  currentUser: state.session.currentUser,
});

const mDTP = (dispatch) => ({
  fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
});

export default connect(mSTP, mDTP)(Home);

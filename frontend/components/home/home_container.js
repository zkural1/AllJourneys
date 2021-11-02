import { connect } from "react-redux";
import Home from "./home";
import { fetchTrail } from "../../actions/trail";

const mSTP = (state) => {
    return {
        currentUser: state.session.currentUser,
    }
}

const mDTP = (dispatch) => {
    return {
        fetchTrail: trailId => dispatch(fetchTrail(trailId)),
    }
}

export default connect(mSTP, mDTP)(Home)
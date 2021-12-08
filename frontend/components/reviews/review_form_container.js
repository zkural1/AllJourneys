import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { createReview, updateReview } from "../../actions/review_actions";

const mSTP = (state, ownProps) => ({
  initialState: {
    rating: 5,
    review_text: "",
    activity_date: "",
    tags: [],
    activity_type: "Hiking",
    user_id: state.session.currentUser.id,
    trail_id: ownProps.trailId,
  },
});

const mDTP = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
});

export default connect(mSTP, mDTP)(ReviewForm);

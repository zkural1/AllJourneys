import { connect } from "react-redux";
import ReviewForm from './review_form';
import {createReview} from '../../actions/review_actions'

const mSTP = (state, ownProps) => {
    return {
        initialState: {
            rating: 5,
            review_text: "",
            activity_date: "",
            user_id: state.session.currentUser.id,
            trail_id: ownProps.trailId

        },
        currentUser: state.entities.users[state.session.currentUserId],
    }
} 


const mDTP = (dispatch) => ({
    createReview: review => dispatch(createReview(review)),
})

export default connect(mSTP, mDTP)(ReviewForm)
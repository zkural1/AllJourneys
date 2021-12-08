/* eslint-disable */
import React from "react";
import ReactStars from "react-rating-stars-component";
import ReviewFormContainer from "./review_form_container";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: this.props.editForm,
    };
    this.showEditForm = this.showEditForm.bind(this);
    this.refreshReviews = this.refreshReviews.bind(this);
  }

  refreshReviews() {
    this.forceUpdate();
  }

  showEditForm() {
    this.setState({ editForm: !this.state.editForm });
  }

  render() {
    if (!this.props.reviews) {
      return null;
    }

    const { currentUser, deleteReview, switchEditForm } = this.props;

    return (
      <div id="reviews-container">
        {this.props.reviews.map((review, idx) => (
          <div key={idx} className="review-container">
            <div id="profile-rating-container">
              <div
                id="profile-picture"
                style={{ backgroundImage: `url(${review.photoUrl})` }}
              />
              <div id="profile-name-rating">
                <h3>{`${review.reviewer.firstname} ${review.reviewer.lastname}`}</h3>
                <div id="star-date-container">
                  <ReactStars
                    size={20}
                    isHalf={false}
                    edit={false}
                    value={review.rating}
                  />
                  <p>{review.activity_date}</p>
                </div>
              </div>
            </div>
            <div id="tag-text-container">
              <div id="review-tag-container">
                <div className="tag">{review.activity_type}</div>
                {review.tags.map((tag, idx) => (
                  <div key={idx} className="tag">
                    {tag}
                  </div>
                ))}
              </div>
              <p>{review.review_text}</p>
            </div>
            {currentUser ? (
              currentUser.id === review.user_id ? (
                <div className="delete-edit-review-container">
                  <a
                    className="delete-review"
                    onClick={() => {
                      deleteReview(review.id);
                      this.props.refreshIndex();
                      this.showEditForm();
                    }}
                  >
                    Delete
                  </a>
                  <a
                    className="edit-review"
                    onClick={() => {
                      this.props.switchEditForm(review);
                      this.props.refreshIndex();
                      this.forceUpdate();
                    }}
                  >
                    Edit
                  </a>
                </div>
              ) : (
                <div></div>
              )
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}

export default ReviewIndex;

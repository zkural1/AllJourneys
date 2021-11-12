import React from "react";
import ReactStars from "react-rating-stars-component";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.reviews) {
      return null;
    }
    return (
      <div id="reviews-container">
        {this.props.reviews.map((review, idx) => (
          <div key={idx} className="review-container">
            <div id="profile-rating-container">
              <div id="profile-picture" style={{ backgroundImage: `url(${review.photoUrl})` }}/>
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
          </div>
        ))}
      </div>
    );
  }
}

export default ReviewIndex;

/* eslint-disable */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FacebookShareButton } from "react-share";
import ParkMap from "../map/park_map";
import ReviewIndex from "../reviews/review_index";
import ReviewFormContainer from "../reviews/review_form_container";
import SearchBarContainer from "../search/search_container";

class TrailShow extends React.Component {
  constructor(props) {
    super(props);
    const cDate = new Date();
    const cDay = cDate.getDate();
    const cMonth = cDate.getMonth() + 1;
    const cYear = cDate.getFullYear();
    const currentDate = `${cYear}-${cMonth}-${cDay}`;
    this.state = {
      refreshReviewIndex: false,
      reviewForm: false,
      editForm: false,
      review: {
        rating: 5,
        date: currentDate,
        activity_date: currentDate,
        review_text: "",
        tags: [],
        activity_type: "Hiking",
      },
      newReview: {
        rating: 5,
        date: currentDate,
        activity_date: currentDate,
        review_text: "",
        tags: [],
        activity_type: "Hiking",
      },
    };
    this.refreshIndex = this.refreshIndex.bind(this);
    this.switchReviewForm = this.switchReviewForm.bind(this);
    this.switchEditForm = this.switchEditForm.bind(this);
    this.resetReview = this.resetReview.bind(this);
  }

  refreshIndex() {
    this.setState({ refreshReviewIndex: !this.state.refreshReviewIndex });
    this.props.fetchTrail(this.props.match.params.trailId);
  }

  switchReviewForm(review) {
    this.setState({ reviewForm: !this.state.reviewForm });
    if (review) {
      this.setState({ review: review });
    }
  }
  switchEditForm(review) {
    this.setState({ editForm: !this.state.editForm });
    if (review) {
      this.setState({ review: review });
    }
  }

  resetReview() {
    this.setState((prevState) => ({
      review: prevState.newReview,
      reviewForm: false,
      editForm: false,
    }));
  }
  componentDidMount() {
    const { fetchTrail, match } = this.props;
    fetchTrail(match.params.trailId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.fetchTrail(this.props.match.params.trailId);
    } else if (this.state.refreshReviewIndex) {
      this.props.fetchTrail(this.props.match.params.trailId);
      this.setState({ refreshReviewIndex: false });
    }
  }

  render() {
    const trails = this.props.otherTrails;
    const trail = this.props.currentTrail;
    const { park, deleteReview, currentUser } = this.props;
    const { reviewForm, editForm, newReview, review } = this.state;
    const writeReviewButton = currentUser ? (
      <div id="write-review-button-container">
        <div id="write-review-button" onClick={() => this.switchReviewForm()}>
          Write review
        </div>
        {this.state.reviewForm ? (
          <ReviewFormContainer
            trail={trail}
            formType={"new"}
            review={newReview}
            resetReview={this.resetReview}
            refreshIndex={this.refreshIndex}
          />
        ) : null}
        {editForm ? (
          <ReviewFormContainer
            trail={trail}
            formType={"edit"}
            review={review}
            resetReview={this.resetReview}
            refreshIndex={this.refreshIndex}
          />
        ) : null}
      </div>
    ) : null;
    if (this.props.currentTrail) {
      const url = window.location.href;
      return (
        <div className="trail-page">
          <div className="trail-container">
            <div id="location-search-photos-container">
              <div className="location-and-search">
                <div id="location">
                  <p>{park.country}</p>
                  <p>›</p>
                  <p>{park.state}</p>
                  <p>›</p>
                  <Link to={`/parks/${park.id}`} key={trail.id}>
                    <p id="park-name">{park.name}</p>
                  </Link>
                </div>
                <SearchBarContainer type="show-page" />
              </div>
              <div id="trail-info-container">
                <div
                  id="trail-photo-container"
                  style={{ backgroundImage: `url(${trail.photoUrl})` }}
                >
                  <div id="darkener" />
                  <div id="trail-title">
                    <h2>{trail.name}</h2>
                    <div id={trail.difficulty} className="difficulty">
                      {trail.difficulty}
                    </div>
                    <p>{park.name}</p>
                  </div>
                </div>
                <div id="menu-buttons">
                  <a href="https://www.google.com/maps/dir/Current+Location/33.79,-115.9">
                    <div id="directions-icon-wrapper">
                      <FontAwesomeIcon icon="route" id="directions-icon" />
                    </div>
                    <p>Directions</p>
                  </a>
                  <a className="print-button">
                    <div
                      onClick={() => window.print()}
                      id="directions-icon-wrapper"
                    >
                      <FontAwesomeIcon icon="print" id="print-icon" />
                    </div>
                    <p>Print</p>
                  </a>
                  <a>
                    <div id="directions-icon-wrapper">
                      <FacebookShareButton url={url}>
                        <FontAwesomeIcon icon="share" id="share-icon" />
                      </FacebookShareButton>
                    </div>
                    <p>Share</p>
                  </a>
                </div>

                <div id="info-container">
                  <div id="info">
                    <div id="summary">
                      <p>{trail.summary}</p>
                    </div>
                    <div id="trail-data-container">
                      <div id="info-length" className="trail-data">
                        <h3>Length</h3>
                        <p>{trail.length} mi</p>
                      </div>
                      <div id="info-elevation-gain" className="trail-data">
                        <h3>Elevation gain</h3>
                        <p>{trail.elevation_gain} ft</p>
                      </div>
                      <div id="info-route-type" className="trail-data">
                        <h3>Route type</h3>
                        <p>{trail.route_type}</p>
                      </div>
                    </div>
                    <div id="tag-container">
                      {trail.tags.map((tag, idx) => (
                        <div key={idx} className="tag">
                          {tag}
                        </div>
                      ))}
                    </div>
                    <div id="reviews-container">
                      <div id="review-header">
                        <p>Reviews</p>
                      </div>
                      <div id="reviews-avg-rating-container">
                        <div id="reviews-avg-rating"></div>
                        {writeReviewButton}
                      </div>
                      <div id="reviews-summary-create-button-container">
                        <div id="review-button" />
                      </div>
                      <ReviewIndex
                        key={this.state.refreshReviewIndex}
                        trail={trail}
                        reviews={trail.reviews}
                        deleteReview={deleteReview}
                        currentUser={currentUser}
                        editForm={this.state.editForm}
                        switchEditForm={this.switchEditForm}
                        refreshIndex={this.refreshIndex}
                        reviewIndexState={this.state.refreshReviewIndex}
                      />
                    </div>
                  </div>
                  <div id="map-other-trails-container">
                    <div id="map-div">
                      <ParkMap location={[trail.lng, trail.lat]} type="trail" />
                    </div>
                    <div id="other-trails">
                      <h2>Nearby trails</h2>
                      {Object.values(trails).map((trail) => (
                        <Link to={`/trails/${trail.id}`} key={trail.id}>
                          <div className="neaby-trail-container">
                            <img
                              src={trail.photoUrl}
                              className="nearby-trail-photo"
                            />
                            <div className="nearby-trail-info">
                              <h3>{trail.name}</h3>
                              <p id="park">{park.name}</p>
                              <div id={trail.difficulty} className="difficulty">
                                {trail.difficulty}
                              </div>
                              <p id="length-time">{`Length: ${trail.length} mi · Est. ${trail.time}`}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div className="trail-page" />;
  }
}

export default TrailShow;

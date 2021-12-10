/* eslint-disable */

import React from "react";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    const cDate = new Date();
    const cDay = cDate.getDate();
    const cMonth = cDate.getMonth() + 1;
    const cYear = cDate.getFullYear();
    const currentDate = `${cYear}-${cMonth}-${cDay}`;
    const { review } = this.props;
    this.state = {
      trailConditions: {
        "Great!": "",
        Blowdown: "",
        "Bridge out": "",
        Bugs: "",
        Closed: "",
        Fee: "",
        Flooded: "",
        Icy: "",
        Muddy: "",
        "No Shade": "",
        "Off Trail": "",
        "Over Grown": "",
        "Private property": "",
        Rocky: "",
        Scramble: "",
        Snow: "",
        "Washed out": "",
      },
      review: {
        id: review.id,
        rating: review.rating,
        date: review.date,
        activity_date: review.activity_date,
        review_text: review.review_text,
        tags: review.tags,
        activity_type: review.activity_type,
        user_id: this.props.initialState.user_id,
        trail_id: this.props.trail.id,
      },
      initialReview: {
        rating: 5,
        date: currentDate,
        activity_date: currentDate,
        review_text: "",
        tags: [],
        activity_type: "Hiking",
      },
      modal: "clicked",
      firstPage: "",
      secondPage: "",
      formType: this.props.formType,
    };
    this.postReview = this.postReview.bind(this);
    this.update = this.update.bind(this);
    this.toggle = this.toggle.bind(this);
    this.fillTrailConditions = this.fillTrailConditions.bind(this);
    this.flipTrailCondition = this.flipTrailCondition.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fillTrailConditions();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(this.props.initialState);
  }

  toggle(element) {
    let newStatus;

    if (this.state[element]) {
      newStatus = "";
    } else {
      newStatus = "clicked";
    }

    this.setState({ [element]: newStatus });
  }

  fillTrailConditions() {
    let newState = this.state;

    this.state.review.tags.map(
      (tag) => (newState.trailConditions[tag] = "clicked")
    );
    this.setState(newState);
  }

  flipTrailCondition(condition) {
    let newStatus;
    const newState = this.state;

    if (newState.trailConditions[condition]) {
      newStatus = "";
      newState.review.tags.splice(newState.review.tags.indexOf(condition), 1);
    } else {
      newStatus = "clicked";
      newState.review.tags.push(condition);
    }

    newState.trailConditions[condition] = newStatus;
    this.setState({ trailConditions: this.state.trailConditions });
    this.setState({ review: newState.review });
  }

  update(field) {
    return (e) => {
      const newState = this.state;
      newState.review[field] = field === "rating" ? e : e.target.value;
      this.setState(newState);
    };
  }

  postReview() {
    const {createReview, updateReview } = this.props;
    
    let newState = this.state;
    newState.review.tags = this.state.review.tags.join(",");
    this.setState({ newState });

    if (this.state.formType === "new") {
      createReview(this.state.review);
    } else {
      updateReview(this.state.review);
    }


    this.props.refreshIndex();
    this.setState({ review: this.state.initialReview });
    this.props.resetReview();
    this.toggle("firstPage");
    this.toggle("modal");
  }

  render() {
    const {
      trailConditions,
      modal,
      firstPage,
      secondPage,
      review,
    } = this.state;

    const { resetReview } = this.props;
    return (
      <div>
        <div id={`modal-container-${modal}`}>
          <form>
            <div id={`form-first-page-${firstPage}`}>
              <div id="exit-icon-container">
                <FontAwesomeIcon
                  icon="times"
                  id="directions-icon"
                  onClick={() => {
                    this.toggle("modal");
                    resetReview();
                  }}
                  className="exit-icon"
                />
              </div>
              <h3 id="form-trail-name-container">{this.props.trail.name}</h3>
              <p className="step-count">Step 1 of 2</p>
              <div id="form-star-ratings">
                <ReactStars
                  size={40}
                  options={{ size: 40, isHalf: false, edit: true }}
                  onChange={this.update("rating")}
                  value={review.rating}
                />
              </div>
              <div id="form-rating-text-container">
                <textarea
                  name="review-text"
                  placeholder="Give back to the community. Share your thoughts about the trail so others know what to expect."
                  onChange={this.update("review_text")}
                  value={review.review_text}
                />
              </div>
              <div
                id="form-first-next-page-button"
                onClick={() => this.toggle("firstPage")}
                className="button"
              >
                Next
              </div>
            </div>
            <div id={`form-second-page-${secondPage}`}>
              <div id="exit-icon-container">
                <FontAwesomeIcon
                  icon="times"
                  id="directions-icon"
                  onClick={() => {
                    this.toggle("firstPage");
                    this.toggle("modal");
                  }}
                  className="exit-icon"
                />
              </div>
              <h3 id="form-trail-name-container">{this.props.trail.name}</h3>
              <p className="step-count">Step 2 of 2</p>
              <div id="form-activity-type">
                <p>Activity Type</p>
                <select
                  value={review.activity_type}
                  className="option-selector"
                  onChange={this.update("activity_type")}
                >
                  <option value="Backpacking">Backpacking</option>
                  <option value="Bird watching">Bird watching</option>
                  <option value="Bike touring">Bike touring</option>
                  <option value="Camping">Camping</option>
                  <option value="Cross-country skiing">
                    Cross-country skiing
                  </option>
                  <option value="Fishing">Fishing</option>
                  <option value="Hiking">Hiking</option>
                  <option value="Horseback riding">Horseback riding</option>
                  <option value="Mountain biking">Mountain biking</option>
                  <option value="Nature trips">Nature trips</option>
                  <option value="OHV/Off-road driving">
                    OHV/Off-road driving
                  </option>
                  <option value="Paddle sports">Paddle sports</option>
                  <option value="Road biking">Road biking</option>
                  <option value="Rock climbing">Rock climbing</option>
                  <option value="Scenic driving">Scenic driving</option>
                  <option value="Snowshoeing">Snowshoeing</option>
                  <option value="Skiing">Skiing</option>
                  <option value="Running">Running</option>
                  <option value="Via ferrata">Via ferrata</option>
                  <option value="Walking">Walking</option>
                </select>
                <input
                  type="date"
                  className="option-selector"
                  onChange={this.update("activity_date")}
                />
              </div>
              <div id="form-trail-conditions-container">
                <p>Trail Conditions</p>
                <div id="form-trail-conditions">
                  {Object.keys(trailConditions).map((condition, idx) => (
                    <div
                      key={idx}
                      className={`form-trail-condition ${trailConditions[condition]}`}
                      value={trailConditions[condition]}
                      onClick={() => this.flipTrailCondition(condition)}
                    >
                      {condition}
                    </div>
                  ))}
                </div>
              </div>
              <div id="second-page-buttons">
                <div
                  id="back-button"
                  onClick={() => this.toggle("firstPage")}
                  className="button"
                >
                  Back
                </div>
                <div
                  id="form-button"
                  className="button"
                  onClick={() => this.postReview()}
                >
                  Post
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ReviewForm;

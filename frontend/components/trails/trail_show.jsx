import React from "react";
import { Link } from "react-router-dom";
import ParkMap from "../map/park_map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewIndex from "../reviews/review_index";

class TrailShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrail(this.props.match.params.trailId);
  }

  render() {
    if (this.props.currentTrail) {
      const trails = this.props.otherTrails;
      const trail = this.props.currentTrail;
      const park = this.props.park;
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
                  <p>{park.name}</p>
                </div>
                <div id="upper-searchbar">
                  <input
                    type="text"
                    placeholder="Enter a city, park, or trail name"
                  />
                  <button>
                    <FontAwesomeIcon icon="search" id="upper-search-icon" />
                  </button>
                </div>
              </div>
              <div id="trail-info-container">
                <div
                  id="trail-photo-container"
                  style={{ backgroundImage: `url(${trail.photoUrl})` }}
                >
                  <div id="darkener"></div>
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
                  <a>
                    <div id="directions-icon-wrapper">
                      <FontAwesomeIcon icon="print" id="print-icon" />
                    </div>
                    <p>Print</p>
                  </a>
                  <a>
                    <div id="directions-icon-wrapper">
                      <FontAwesomeIcon icon="share" id="share-icon" />
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
                      <ReviewIndex reviews={trail.reviews} />
                    </div>
                  </div>
                  <div id="map-other-trails-container">
                    <div id="map-div">
                      <ParkMap location={[trail.lng, trail.lat]} type="trail"/>
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
    } else {
      return <div className="trail-page"></div>;
    }
  }
}

export default TrailShow;

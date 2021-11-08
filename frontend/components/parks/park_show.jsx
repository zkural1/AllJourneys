import React from "react";
import ParkMap from "../map/park_map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ParkShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPark(this.props.match.params.parkId);
  }
  render() {
    const park = this.props.park;
    const disp = park ? (
      <div className="park-container">
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
        <div id="park-photos-container">
          <img src={park.photos[0].trailUrl} alt="park-photos-1" className="park-photos"></img>
          <img src={park.photos[1].trailUrl} alt="park-photos-2" className="park-photos"></img>
          <img src={park.photos[2].trailUrl} alt="park-photos-3" className="park-photos"></img>
        </div>
        </div>
        <div id="park-info-container">
          <h2>Best Trails in {park.name}</h2>
          <p>Ratings</p>
          <p>{park.description}</p>
          <div id="map-div">
            <ParkMap location={[park.lng, park.lat]} type="park" />
          </div>
          <div id="map-options">
            <a href="https://www.google.com/maps/dir/Current+Location/33.79,-115.9"><div id="directions-icon-wrapper"><FontAwesomeIcon icon="route" id="directions-icon" /></div>Directions</a>
            <a><div id="directions-icon-wrapper"><FontAwesomeIcon icon="print" id="print-icon" /></div>Print map</a>
            <a><div id="directions-icon-wrapper"><FontAwesomeIcon icon="share" id="share-icon" /></div>Share</a>
          </div>
        </div>
        <div className="park-information-container">
          <h2 id="park-info">Park Information</h2>
          <div className="acreage-contact-container">
            <div className="acreage-container">
              <h3>Acreage</h3>
              <p>{park.acreage}</p>
            </div>
            <div className="contact-container">
              <h3>Contact</h3>
              <p>{park.contact}</p>
            </div>
            <div></div>
          </div>
        </div>
        <div id="top-trails-container">
          <div id="filters-container">
            <div className="filter">Difficulty <FontAwesomeIcon icon="angle-down" id="angle-down-icon"/></div>
            <div className="filter">Length <FontAwesomeIcon icon="angle-down" id="angle-down-icon"/></div>
            <div className="filter">Elavation gain <FontAwesomeIcon icon="angle-down" id="angle-down-icon"/></div>
            <div className="filter">Route type <FontAwesomeIcon icon="angle-down" id="angle-down-icon"/></div>
            <div className="filter">Rating <FontAwesomeIcon icon="angle-down" id="angle-down-icon"/></div>
            <div className="filter">More filters <FontAwesomeIcon icon="angle-down" id="angle-down-icon"/></div>
          </div>
          <h3 id="trails-count">Top trails ({park.trails.length})</h3>
          <div id="trail-container">
            {park.trails.map ((trail,idx)=>(
              <div key={idx+1} className = "trail">
                <img className="trail-photo" src={park.photos[idx].trailUrl}/>
                <div id={idx+1} className="trail-info">
                  <h3>{`#${idx+1} - ${trail.name}`}</h3>
                  <p id="park">{park.name}</p>
                  <div id={trail.difficulty} className="difficulty">{trail.difficulty}</div>
                  <p id="length-time">{`Length: ${trail.length} mi · Est. ${trail.time}`}</p>
                  <p id="description">{trail.summary}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    ) : (
      <div>Park</div>
    );
    return <div className="park-page">{disp}</div>;
  }
}

export default ParkShow;

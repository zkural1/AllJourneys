import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Home extends React.Component {
  render() {
    const slogan = this.props.currentUser ? (
      <div className="slogan-search" id="slogan">
        {" "}
        Ready to do this?, {this.props.currentUser.firstname}
      </div>
    ) : (
      <div className="slogan-search" id="slogan">
        Find your next trail
      </div>
    );
    return (
      <div className="homepage">
        <div id="homepage-1">
          <div id="photo-1"></div>

          {slogan}
          <div className="slogan-search" id="search-wrapper">
            <FontAwesomeIcon icon="search" />
            <input
              className="search"
              type="text"
              placeholder="Search by city,park, or trail name"
            />
            <FontAwesomeIcon icon="arrow-circle-right" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

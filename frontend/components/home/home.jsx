import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBarContainer from "../search/search_container";
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
          <div></div>
          {slogan}
          <SearchBarContainer/>
          {/* <div className="slogan-search" id="search-wrapper">
            <FontAwesomeIcon icon="search" id="search"/>
            <input
              className="search"
              type="text"
              placeholder="Search by city, park, or trail name"
              id="searchbar"
            />
            <FontAwesomeIcon icon="arrow-circle-right" id="arrow"/>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Home;

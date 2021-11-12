import React from "react";
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
          <div>
            <SearchBarContainer type="home-page"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

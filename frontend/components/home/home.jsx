import React from "react";
import SearchBarContainer from "../search/search_container";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleFocus() {
    const list = document.getElementById("search-results");
    if (list) {
      list.style.visibility = "visible";
    }
  }

  handleBlur() {
    const list = document.getElementById("search-results");
    if (list) {
      list.style.visibility = "hidden";
    }
  }

  render() {
    const { currentUser } = this.props;
    const slogan = currentUser ? (
      <div className="slogan-search" id="slogan">
        {" "}
        Ready to do this?, {currentUser.firstname}
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
            <SearchBarContainer type="home-page" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

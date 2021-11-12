import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchResults from "./searchresults";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      focus: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  update() {
    return (e) => {
      this.setState({ query: e.target.value }, this.handleSubmit);
    };
  }

  handleFocus() {
    this.setState({ focus: true });
  }

  handleBlur() {
    this.setState({ focus: false });
  }

  handleSubmit(e) {
    if (this.state.query === "") {
      this.props.clearSearchResults();
    } else this.props.fetchSearchResults(this.state.query);
  }

  render() {
    const { results } = this.props;
    if (this.props.type === "home-page") {
      return (
        <>
          <div
            className="slogan-search"
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          >
            <form
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onSubmit={this.handleSubmit}
              className="search-input"
              id="search-wrapper"
            >
              <FontAwesomeIcon icon="search" id="search" />

              <input
                type="text"
                placeholder="Search by park or trail name"
                onChange={this.update()}
                id="searchbar"
              />
              <FontAwesomeIcon icon="arrow-circle-right" id="arrow" />
            </form>
          </div>
          {this.state.query !== "" ? (
            <SearchResults
              results={results}
              query={this.state.query}
              fetchSearchResults={this.props.fetchSearchResults}
              type="home-page"
            />
          ) : null}
        </>
      );
    } else {
      return (
        <div id="show-search-container">
          <div id="upper-searchbar">
            <form
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onSubmit={this.handleSubmit}
              className="search-input"
            >
              <input
                type="text"
                placeholder="Search by park or trail name"
                onChange={this.update()}
              />
              <button>
                <FontAwesomeIcon icon="search" id="upper-search-icon" />
              </button>
            </form>
          </div>
          {this.state.query !== "" ? (
            <SearchResults
              results={results}
              query={this.state.query}
              fetchSearchResults={this.props.fetchSearchResults}
              type="show-page"
            />
          ) : null}
        </div>
      );
    }
  }
}

export default SearchBar;

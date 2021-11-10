import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class SearchResults extends React.Component {
  render() {
    const noResults = <li id="no-results" className="search-result-item">No Results Found</li>;
    const Results = this.props.results.map((result, idx) => (
      <li className="search-result-item" key={idx}>
        {result.category === "Trail" ? (
          <Link to={`/trails/${result.id}`}>
            <div className="icon">
              <FontAwesomeIcon icon="map-marker-alt" id="map-marker-alt" />
            </div>
            <div className="search-info">
            <p className="search-name">{result.name}</p>
            <p className="search-detail">{`${result.park.name}, ${result.park.state}`}</p>
            </div>
          </Link>
        ) : (
          <Link to={`/parks/${result.id}`}>
            <div className="icon">
              {" "}
              <FontAwesomeIcon icon="tree" id="tree" />
            </div>
            <div className="search-info">
            <p className="search-name">{result.name}</p>
            <p className="search-detail">{`${result.state}, ${result.country}`}</p>
            </div>
          </Link>
        )}
      </li>
    ));

    return (
      <ul className="search-results">
        {this.props.results.length ? Results : noResults}
      </ul>
    );
  }
}

export default SearchResults;

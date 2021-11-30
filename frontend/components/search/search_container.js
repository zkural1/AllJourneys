import { connect } from "react-redux";
import SearchBar from "./searchbar";
import {
  fetchSearchResults,
  clearSearchResults,
} from "../../actions/search_actions";

const mSTP = (state) => ({
  results: state.search,
});

const mDTP = (dispatch) => ({
  clearSearchResults: () => dispatch(clearSearchResults()),
  fetchSearchResults: (query) => dispatch(fetchSearchResults(query)),
});

export default connect(mSTP, mDTP)(SearchBar);

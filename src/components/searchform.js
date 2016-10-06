import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import JSONP from 'jsonp';

const googleautoCompleteURL = 'http://suggestqueries.google.com/complete/search?';
const autoCompleteOptions = {
  "h1": "en", // Language
  "ds": "yt", // search YouTube
  "client": "youtube" // response type
};

/* convert dictionary of url options to a query string */
function toQueryString(opts) {
  let parts = []
  for (var opt in opts) {
    if (opts.hasOwnProperty(opt)) {
      parts.push(encodeURIComponent(opt) + "=" + encodeURIComponent(opts[opt]));
    }
  }
  return parts.join("&");
}

const YTautoCompleteURL = googleautoCompleteURL + toQueryString(autoCompleteOptions) + "&q=";
const getSuggestionValue = suggestion => suggestion[0];
const renderSuggestion = suggestion => (
  <div>
    {suggestion[0]}
  </div>
);

/* Search bar and UI buttons. */
class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchResults: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  }

  clearSuggestions = () => {
    this.setState({ searchResults: [] });
  }

  fetchSuggestions = ({ value }) => {
    let query = value;
    let url = YTautoCompleteURL + query;

    this.setState({ value: query });

    JSONP(url, (err, data) => {
      if (err) {
          console.log(err);
      } else {
        this.setState({ searchResults: data[1] });
      }
    });
  }

  handleAdd() {

  }

  handleSearch() {

  }

  render() {

    const { value, searchResults } = this.state
    // Props to pass to Autosuggest
    const inputProps = {
      placeholder: 'Search',
      value,
      onChange: this.onChange
    };

    return(
      <div className="searchFormdiv">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <Autosuggest
            suggestions={searchResults}
            onSuggestionsFetchRequested={this.fetchSuggestions}
            onSuggestionsClearRequested={this.clearSuggestions}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />

          <Button name="search" handleSubmit={this.handleSearch} />
          <Button name="add" handleSubmit={this.handleAdd} />
        </form>
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return(
      <button className={this.props.name + "Button"} type="submit" onClick={this.props.handleSubmit}>
        <span className={this.props.name + "ButtonContent"} />
      </button>
    );
  }
}

export default SearchForm;

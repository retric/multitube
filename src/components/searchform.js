import React, { Component } from 'react';

class SearchForm extends Component {
  handleSubmit() {

  }
  
  render() {
    return(
      <div className="searchFormdiv">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <input id="searchBar" type="text" ref="" placeholder="Search" />
          <button className="searchButton" type="submit" onClick={this.handleSubmit}>
            <span className="searchButtonContent" />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;

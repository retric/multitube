import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleSubmit() {

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Multitube--React edition.</h2>
        </div>
        <p className="App-intro">
        To get started, enter a video that you would like to watch.
        </p>
        <div className="searchForm">
          <form className="searchForm" onSubmit={this.handleSubmit}>
          <input id="searchBar" type="text" ref="" placeholder="Search" />
          <button className="searchButton" type="submit" onClick={this.handleSubmit}><span className="searchButtonContent" /></button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;

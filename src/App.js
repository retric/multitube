import React, { Component } from 'react';
import SearchForm from './components/searchform'
//import Iframe from './components/iframe'
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
        <SearchForm />
      </div>
    );
  }
}

export default App;

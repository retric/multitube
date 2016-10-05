import React, { Component } from 'react';
import SearchForm from './components/searchform'
import PlayerSpace from './components/playerspace'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Multitube</h2>
        </div>
        <p className="App-intro">
        To get started, enter a video that you would like to watch.
        </p>
        <SearchForm />
        <PlayerSpace />
      </div>
    );
  }
}

export default App;

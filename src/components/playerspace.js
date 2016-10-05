import React, { Component } from 'react';
import Youtubepl from './youtubepl'

class PlayerSpace extends Component {
  constructor(props) {
    super();
    this.maxPlayers = 12;
    this.numPlayers = 1;
    this.children = [{key: 1, videoId: 'A-Tod1_tZdU'}];
  }

  render () {
    return (
      <div className="playerSpace">
        {this.children.map((child) => (
          <Youtubepl pos={child["key"]} videoId={child["videoId"]} />
        ))}
      </div>
    );
  }
}

export default PlayerSpace;

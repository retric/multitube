import React, { Component } from 'react';
import YouTubePlayer from 'youtube-player';

class Youtubepl extends Component {
  constructor(props) {
    super();
    this.pos = props.pos;
    this.videoId = props.videoId;
    this.id = "youtubePL" + this.pos;
    this.aspectRatio = 315/560;
  }

  componentDidMount() {
    this.createPlayer();
  }

  componentWillUnmount() {

  }

  createPlayer() {
    const playerOpts = {
      videoId: this.props.videoId
    };
    this.player = YouTubePlayer(this.component, playerOpts);
  }

  render() {
    return (
      <div className="youtubeContainer" id={"youtubePLcont" + this.pos}>
        <div className="youtubePL" id={this.id} ref={(c) => this.component = c}>
        </div>
      </div>
    );
  }
}

export default Youtubepl;

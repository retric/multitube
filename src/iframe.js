import React, { Component } from 'react';

class Iframe extends Component {
  render() {
    return (
      <iframe id="player" type="text/html" width={this.props.width} height={this.props.height} src={"http://www.youtube.com/embed/" + this.props.videoId + "?enablejsapi=1&origin="} frameborder="0">
      </iframe>
    );
  }
}


export default Iframe;

import React, { Component } from 'react';

class AudioPlayer extends React.Component {
      
  render() {
    return (
        <div className='AudioPlayer'>
        <audio
            src={ this.props.src }
            controls={ true }/>
          </div>
        );
      }
  }
export default AudioPlayer;
import React, { Component } from 'react';

class AudioPlayer extends React.Component {
    constructor(props) {
      super(props);
    }
      
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
import ReactDOM, { render } from 'react-dom';
import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import PictureSlideshow from '../PictureSlideshow.js';

class App extends Component {
  render(){
    return(
      <div id="container">
        <PictureSlideshow/>
    </div>
    )
  }
};

export default (App);
import ReactDOM, { render } from 'react-dom';
import React, { Component } from 'react';
import './App.css';
import DropdownButton from '../DropdownButton/DropdownButton';
import PictureSlideshow from '../PictureSlideshow.js';

class App extends Component {
  render() {

    return (
      <div className="App">
        <DropdownButton title="Picture" categories={['Human', 'Nature','Mini']}/>
        <DropdownButton title="Sound" categories={['Music', 'Nature','Stoy']}/>
        <DropdownButton title="Text" categories={['Poem', 'Humour','Wisdom']}/>
      </div>
      <div id="container">
        <PictureSlideshow/>
    </div>
    );
  }
}

export default App;
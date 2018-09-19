import ReactDOM, { render } from 'react-dom';
import React, { Component } from 'react';
import './App.css';
import DropdownButton from '../DropdownButton/DropdownButton';
import PictureSlideshow from '../PictureSlideshow.js';



class App extends Component {


  render() {
    
    return (
      <div className="App">
        <div className="col-12">
          <div className="col-12 dropdown" height="25px">
            <DropdownButton title="Picture" categories={['Human', 'Nature','Animal']}/>
            <DropdownButton title="Sound" categories={['Music', 'Nature','Stoy']} />
            <DropdownButton title="Text" categories={['Poem', 'Humour','Wisdom']}/>
          </div>
        <PictureSlideshow/>
        </div>
      </div>
    );
  }
}


export default App;
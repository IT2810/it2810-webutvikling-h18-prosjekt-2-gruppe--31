import React, { Component } from 'react';
import './App.css';
import DropdownButton from '../DropdownButton/DropdownButton';

class App extends Component {
  render() {

    return (
      <div className="App">
        <DropdownButton title="Picture" categories={['Human', 'Nature','Mini']}/>
        <DropdownButton title="Sound" categories={['Music', 'Nature','Sound']}/>
        <DropdownButton title="Text" categories={['Poem', 'Humour','Wisdom']}/>
      </div>
    );
  }
}

export default App;

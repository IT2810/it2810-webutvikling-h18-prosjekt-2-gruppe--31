import ReactDOM, { render } from 'react-dom';
import React, { Component } from 'react';
import './App.css';
import DropdownButton from '../DropdownButton/DropdownButton';
import PictureSlideshow from '../PictureSlideshow.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {Picture: 'Human', Sound: 'Music', Text: 'Poem'};
    this.handleStateChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleStateChange(selection, type){
    if (type === "Picture"){
      this.setState({Picture: selection, Sound: this.state.Sound, Text: this.state.Text});
    }
    else if (type === "Sound"){
      this.setState({Picture: this.state.Picture, Sound: selection, Text: this.state.Text});
    }
    else{
      this.setState({Picture: this.state.Picture, Sound: this.state.Sound, Text: selection});
    }
  }

  handleSubmit(event) {
    alert(this.state.Picture + " " + this.state.Sound + " " + this.state.Text);
    event.preventDefault();
  }
  render() {
    const selectionPicture = this.state.Picture;
    const selectionSound = this.state.Sound;
    const selectionText = this.state.Text;

    return (
      <div className="App" maxheight="80%">
        <div className="col-12" maxheight="80%">
          <div className="col-12 dropdown" height="25px">
          <form className="dropdown" onSubmit={this.handleSubmit}>
            <DropdownButton title="Picture" selection = {selectionPicture}  categories={['Human', 'Nature','Mini']} Changer={this.handleStateChange.bind(this)}/>
            <DropdownButton title="Sound" selection = {selectionSound}  categories={['Music', 'Nature','Stoy']} Changer={this.handleStateChange.bind(this)}/>
            <DropdownButton title="Text" selection = {selectionText} categories={['Poem', 'Humour','Wisdom']} Changer={this.handleStateChange.bind(this)}/>
            <input type="submit" value="Submit" />
            </form>
          </div>
        <PictureSlideshow/>
        </div>
      </div>
    );
  }
}


export default App;
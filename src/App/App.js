import ReactDOM, { render } from 'react-dom';
import React, { Component } from 'react';
import './App.css';
import DropdownButton from '../DropdownButton/DropdownButton';
import PictureSlideshow from '../PictureSlideshow.js';
import Words from '../Words/Words';


const picArray = ['../SVG/Animal/elg.svg', '../SVG/Animal/falk.svg', '../SVG/Animal/salamander.svg', '../SVG/Animal/sjiraff.svg'];

class App extends Component {

  constructor(props) {
    super(props);
    this.pictures_db = { Animal: ['../SVG/Animal/elg.svg', '../SVG/Animal/falk.svg', '../SVG/Animal/salamander.svg', '../SVG/Animal/sjiraff.svg'],
      Human: ['../SVG/Human/humans.svg', '../SVG/Human/yoga.svg', '../SVG/Human/standing_human.svg', '../SVG/Human/human-body-size-icons.svg'], 
      Nature: ['../SVG/Nature/water.svg', '../SVG/Nature/tree.svg', '../SVG/Nature/sun.svg', '../SVG/Nature/forest.svg'] }
 
    this.state = { picture: 'Picture', sound: 'Sound', text: 'Text', all_pictures: picArray };
    this.updateCanvas = this.updateCanvas.bind(this);
  }
  
  updateCanvas(title, category) {
    if (title == "Picture") {
      let pictures = this.pictures_db[category]
      Promise.all([
        fetch(pictures[0]),
        fetch(pictures[1]),
        fetch(pictures[2]),
        fetch(pictures[3]),
      ])
        .then( ([p1,p2,p3,p4]) => {
          this.setState({
            picture: category,
            all_pictures: [p1.url, p2.url, p3.url, p4.url]
          });
        });
    } else if ( title == "Sound") {
      this.setState({
        sound: category
      });
    } else if (title == "Text") {
      this.setState({
        text: category
      });
    }
  }

  render() {
    return (
      <div className="App" maxheight="80%">
        <div className="col-12" maxheight="80%">
          <div className="col-12 dropdown" height="25px">
            <DropdownButton title = { this.state.picture } whatDropdown = "Picture" categories={['Human', 'Nature','Animal']} updateCanvas={ this.updateCanvas }/>
            <DropdownButton title = { this.state.sound } whatDropdown = "Sound" categories={['Music', 'Nature','Stoy']} updateCanvas={ this.updateCanvas }/>
            <DropdownButton title = { this.state.text } whatDropdown = "Text" categories={['Poem', 'Humour','Wisdom']} updateCanvas={ this.updateCanvas }/>
          </div>
          <PictureSlideshow all_p = {this.state.all_pictures} />
          <div className="col-12" >
           <Words cat="Poem" index="2"/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
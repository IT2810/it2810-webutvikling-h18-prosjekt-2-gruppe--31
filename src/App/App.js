import ReactDOM, { render } from 'react-dom';
import React, { Component } from 'react';
import './App.css';
import DropdownButton from '../DropdownButton/DropdownButton';
import PictureSlideshow from '../PictureSlideshow.js'
import Canvas from '../Canvas/Canvas.js'

class App extends Component {

  constructor(props) {
    super(props);

    this.pictures_db = { Animal: ['../SVG/Animal/elg.svg', '../SVG/Animal/falk.svg', '../SVG/Animal/salamander.svg', '../SVG/Animal/sjiraff.svg'],
      Human: ['../SVG/Human/humans.svg', '../SVG/Human/yoga.svg', '../SVG/Human/standing_human.svg', '../SVG/Human/human-body-size-icons.svg'], 
      Nature: ['../SVG/Nature/water.svg', '../SVG/Nature/tree.svg', '../SVG/Nature/sun.svg', '../SVG/Nature/forest.svg'] }
    
    const picArray = ['1', '2'];
    this.updateCanvas = this.updateCanvas.bind(this);
    this.state = { picture: '', sound: '', text: '' , p4: '', all_pictures: picArray };
  }
  
  updateCanvas(title, category) {
    if (title == "Picture") {
      let pictures = this.pictures_db[category]
      console.log(pictures);
      Promise.all([
      fetch(pictures[0]),
      fetch(pictures[1]),
      fetch(pictures[2]),
      fetch(pictures[3]),
      ])
        .then( ([p1,p2,p3,p4]) => {
          this.setState({
           picture: p1.url,
           sound: p2.url, 
           text: p3.url,
           p4: p4.url,
           picArray: [p1.url, p2.url, p3.url, p4.url]
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
      <div className="App">
        <div className="col-12">
          <div className="col-12 dropdown" height="25px">
            <DropdownButton title="Picture" categories={['Human', 'Nature','Animal']} updateCanvas={ this.updateCanvas }/>
            <DropdownButton title="Sound" categories={['Music', 'Nature','Stoy']} updateCanvas={ this.updateCanvas }/>
            <DropdownButton title="Text" categories={['Poem', 'Humour','Wisdom']} updateCanvas={ this.updateCanvas }/>
          </div>
            <Canvas all_p = {this.state.picArray} p4 = {this.state.p4}  picture = { this.state.picture } sound = { this.state.sound } text = { this.state.text }/>
        </div>
      </div>
    );
  }
}


//<PictureSlideshow p4 = {this.state.p4} picture = { this.state.picture } sound = { this.state.sound } text = { this.state.text }/>
export default App;
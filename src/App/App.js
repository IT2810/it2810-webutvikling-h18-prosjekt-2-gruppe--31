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
    
    this.updateCanvas = this.updateCanvas.bind(this);
    this.state = { picture: '', sound: '', text: '' , all_pictures: [] };
  }
  
  updateCanvas(title, category) {
    if (title == "Picture") {
      let pictures = this.pictures_db[category]
      console.log(pictures);
      pictures.map((picture) =>
        fetch(picture)
         .then( (result) => {
          this.setState({
            picture: result.url,
            all_pictures: result.url.all_pictures
          });
        })
      );
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
            <Canvas all_p = {this.state.all_pictures}  picture = { this.state.picture } sound = { this.state.sound } text = { this.state.text }/>
        </div>
      </div>
    );
  }
}

//<PictureSlideshow all_pictures = {this.state.all_pictures}/>
export default App;
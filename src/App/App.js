import ReactDOM, { render } from 'react-dom';
import React, { Component } from 'react';
import './App.css';
import DropdownButton from '../DropdownButton/DropdownButton';
import PictureSlideshow from '../PictureSlideshow/PictureSlideshow';
import Words from '../Words/Words';


const picArray = ['', '', '', ''];
const audioArr = ['', '', '', ''];

class App extends Component {

  constructor(props) {
    super(props);

    this.pictures_db = { Animal: ['../SVG/Animal/elg.svg', '../SVG/Animal/falk.svg', '../SVG/Animal/salamander.svg', '../SVG/Animal/sjiraff.svg'],
      Human: ['../SVG/Human/humans.svg', '../SVG/Human/yoga.svg', '../SVG/Human/standing_human.svg', '../SVG/Human/human-body-size-icons.svg'], 
      Nature: ['../SVG/Nature/water.svg', '../SVG/Nature/tree.svg', '../SVG/Nature/sun.svg', '../SVG/Nature/forest.svg'] 
    }

    this.audio_db = { Noise:['https://soundbible.com/grab.php?id=2219&type=mp3', 'https://soundbible.com/grab.php?id=2214&type=mp3', 'https://soundbible.com/grab.php?id=2114&type=mp3', 'https://soundbible.com/grab.php?id=640&type=mp3'],
      Nature: ['http://soundbible.com/grab.php?id=2033&type=mp3', 'http://soundbible.com/grab.php?id=2032&type=mp3', 'https://soundbible.com/grab.php?id=2217&type=mp3', 'http://soundbible.com/grab.php?id=2012&type=mp3' ],
      Music: ['https://www.mfiles.co.uk/mp3-downloads/bach-bourree-in-e-minor-guitar.mp3', 'https://www.mfiles.co.uk/mp3-downloads/rocking-carol-guitar-glenn-jarrett.mp3', 'https://www.mfiles.co.uk/mp3-downloads/francisco-tarrega-lagrima.mp3', 'https://www.mfiles.co.uk/mp3-downloads/chopin-tarrega-nocturne-op9-no2-guitar.mp3'] 
    }
    
    this.child = React.createRef();
    this.childRerender = React.createRef();
    this.state = { picture: 'Picture', sound: 'Sound', text: 'Text', all_pictures: picArray, all_audio: audioArr, index: 0 };
    this.updateCanvas = this.updateCanvas.bind(this);
  }
  
  /* Input title which is the button type, either picture, sound or text
   * Input category is the different category under Picture, Sound or Text
   * Fetches the pictures and append them to the all_pictures and passes it to PictureSlideshow
  */
  updateCanvas(title, category) {
    if (title === "Picture") {
      let pictures = this.pictures_db[category]
      Promise.all([
        fetch(pictures[0]),
        fetch(pictures[1]),
        fetch(pictures[2]),
        fetch(pictures[3]),
      ]).then( ([p1,p2,p3,p4]) => {
          this.setState({
            picture: category,
            all_pictures: [p1.url, p2.url, p3.url, p4.url]
          });
          this.childRerender.current.childRerender([p1.url, p2.url, p3.url, p4.url]);
          
        });
    } else if ( title === "Sound") {
      let audio = this.audio_db[category]
      this.setState({
        sound: category,
        all_audio:[audio[0], audio[1], audio[2],audio[3]]
      });
      this.childRerender.current.childUpdateAudio(audio[0]);
    } else if (title === "Text") {
      this.setState({
        text: category
      });
      this.child.current.updateWords(category, this.state.index);
    }
  }

  handleIndex(index){
    this.setState({index: index});
    this.child.current.updateWords(this.state.text, index);
  }

  render() {
    return (
      <div className="App">
        <div className="col-12full">
          <div className="col-12dropdown">
            <DropdownButton title = { this.state.picture } whatDropdown = "Picture" categories={['Human', 'Nature','Animal']} updateCanvas={ this.updateCanvas }/>
            <DropdownButton title = { this.state.sound } whatDropdown = "Sound" categories={['Music', 'Nature','Noise']} updateCanvas={ this.updateCanvas }/>
            <DropdownButton title = { this.state.text } whatDropdown = "Text" categories={['Poem', 'Humour','Wisdom']} updateCanvas={ this.updateCanvas }/>
          </div>
          <div className="col-12picture">
          <PictureSlideshow ref ={this.childRerender} all_p = {this.state.all_pictures} all_a = {this.state.all_audio} getIndex = {this.handleIndex.bind(this)}/>
          </div>
          <div className="col-12text" >
            <Words ref={this.child} cat={this.state.text} index={this.state.index}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
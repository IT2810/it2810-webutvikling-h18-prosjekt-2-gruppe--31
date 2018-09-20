import ReactDOM, { render } from 'react-dom';
import React, { Component } from 'react';
import './App/App.css';
import AudioPlayer from './AudioPlayer.js';

class ImageSlider extends React.Component {
  
  constructor(){
    super();
    this._handleClick = this._handleClick.bind(this);
    this.state = {firstImg : '', src : 'https://www.mfiles.co.uk/mp3-downloads/rocking-carol-guitar-glenn-jarrett.mp3', count : 0};
  }

  _handleClick(e){
    if (this.state.count === 0){
      this.setState({firstImg : e.target.src, src : 'https://www.mfiles.co.uk/mp3-downloads/bach-bourree-in-e-minor-guitar.mp3', count : this.state.count + 1});
    }
    else if (this.state.count === 1){
      this.setState({firstImg : e.target.src, src : 'https://www.mfiles.co.uk/mp3-downloads/rocking-carol-guitar-glenn-jarrett.mp3', count : this.state.count + 1});
    }
    else if (this.state.count === 2){
      this.setState({firstImg : e.target.src, src : 'https://www.mfiles.co.uk/mp3-downloads/francisco-tarrega-lagrima.mp3', count : this.state.count + 1});
    }
    else{
      this.setState({firstImg : e.target.src, src : 'https://www.mfiles.co.uk/mp3-downloads/chopin-tarrega-nocturne-op9-no2-guitar.mp3', count : 0});
    }
  }
  
  render() {
    var mainImg = this.state.firstImg ? this.state.firstImg : this.props.images[0];
    const audioPath = this.state.src;
    let audio;
    audio = <AudioPlayer src = {audioPath}/>
    return(
      <div>
        <div className="col-12" maxheight="100px">
          <img className ="focusMainImg" src={mainImg}/>
        </div>
        <div className="col-12" maxheight="50px">
          {this.props.images.map((image, id) => {
            return(
              <img
                key={id}
                className ={mainImg===image? "selectedThumbnail" :"allThumbnail"}
                src={image}
                onClick={this._handleClick} />
            )})}
        </div>
        <div className="AudioPlayer">
              { audio }
        </div>
        
      </div>
    )
  }
}

class ImageSlideShow extends React.Component {
  constructor(props, context){
      super(props, context);

      const images = this.props.pictureArray;
      this.state = {images: images};
      }
      

render(){
   
  return (
            <div>
                <ImageSlider images = {this.state.images}/>
             </div>
  )
}
}

/*ReactDOM.render(<ImageSlideShow />, document.getElementById('container'));*/

export default (ImageSlider, ImageSlideShow);
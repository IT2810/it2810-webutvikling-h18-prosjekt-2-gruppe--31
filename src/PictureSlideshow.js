import ReactDOM, { render } from 'react-dom';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App/App.css';

class ImageSlider extends React.Component {
  
  constructor(){
    super();
    this._handleClick = this._handleClick.bind(this);
    this.state = {firstImg : ''};
  }
  _handleClick(e){
    this.setState({firstImg : e.target.src});
  }
  render() {
    var mainImg = this.state.firstImg ? this.state.firstImg : this.props.images[0];
    return(
      <div class="flex-containerVertical">
        <div class="flex-containerHorizontal">
          <img className ="focusMainImg" src={mainImg}/>
        </div>
        <div id="div1" class ="flex-containerHorizontal">
          {this.props.images.map((image, key) => {
            return(
              <img
                key={key}
                className ={mainImg==image? "selectedThumbnail" :"allThumbnail"}
                src={image}
                onClick={this._handleClick} />
            )})}
        </div>
        
      </div>
    )
  }
}

class ImageSlideShow extends React.Component {
  constructor(props, context){
      super(props, context);
      this.state = {};
      this.state.images= [];
      this.state.images = ['https://www.shareicon.net/data/512x512/2016/11/30/859203_nature_512x512.png',
      'https://www.shareicon.net/data/512x512/2016/11/16/854281_nature_512x512.png',
      'https://www.shareicon.net/data/512x512/2016/11/16/854313_flower_512x512.png',
    'https://www.shareicon.net/data/512x512/2016/11/16/854312_nature_512x512.png'];
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
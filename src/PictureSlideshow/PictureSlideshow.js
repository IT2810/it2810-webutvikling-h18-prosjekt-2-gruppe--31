import React from 'react';
import '../App/App.css';
import AudioPlayer from '../AudioPlayer';
import './PictureSlideshow.css'

class ImageSlider extends React.Component {

  constructor(props){
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this.state = {firstImg : '', src : 'https://www.mfiles.co.uk/mp3-downloads/rocking-carol-guitar-glenn-jarrett.mp3', count : 0};
    this.handleIndexChange.bind(this);
    this.Rerender.bind(this);
    this.UpdateAudio.bind(this);
  }

  handleIndexChange(e){
    this.props.handleIndexChange(e);
  }

  _handleClick(e){
    if (this.state.count === 0){
      this.setState({firstImg : e.target.src, src : this.props.audioArray[0], count : this.state.count + 1});
      this.handleIndexChange(this.state.count + 1);
    }
    else if (this.state.count === 1){
      this.setState({firstImg : e.target.src, src : this.props.audioArray[1], count : this.state.count + 1});
      this.handleIndexChange(this.state.count + 1);
    }
    else if (this.state.count === 2){
      this.setState({firstImg : e.target.src, src : this.props.audioArray[2], count : this.state.count + 1});
      this.handleIndexChange(this.state.count + 1);
    }
    else{
      this.setState({firstImg : e.target.src, src : this.props.audioArray[3], count : 0});
      this.handleIndexChange(0);

    }
  }

  Rerender(image){
    this.setState({firstImg: image});
  }
  UpdateAudio(audio){
    this.setState({src: audio});
  }

  render() {
    var mainImg = this.state.firstImg ? this.state.firstImg : this.props.images[0];
    const audioPath = this.state.src;
    let audio;
    audio = <AudioPlayer src={audioPath} />
    return (
      <div>
        <div className="col-12" maxheight="100px">
          <img className="focusMainImg" src={mainImg} />
        </div>
        <div className="col-12" maxheight="50px">
          { this.props.images.map((image, id) => {
            return(
              <img
                key={id}
                className={mainImg === image ? "selectedThumbnail" : "allThumbnail"}
                src={image}
                onClick={this._handleClick} />
            )}
          )}
        </div>
        <div className="AudioPlayer">
          {audio}
        </div>
      </div>
    )
  }
}

class ImageSlideShow extends React.Component {
  constructor(props){
      super(props); 
      this.handleChange = this.handleChange.bind(this);
      this.childRerenderDepth = React.createRef();
  }
  handleChange(e){
    this.props.getIndex(e);
  }

  childUpdateAudio(audio){
    this.childRerenderDepth.current.UpdateAudio(audio);
  }
  
  childRerender(image){
    console.log(image);
    this.childRerenderDepth.current.Rerender(image);
  }

  //Gets all_p from App.js, all_p is the chosen category pictures
  render(){

    return (
      <div>
        <ImageSlider ref = {this.childRerenderDepth} images = {this.props.all_p} audioArray = {this.props.all_a} handleIndexChange = {this.handleChange.bind(this)}/>
      </div>
    )
  }
}

export default (ImageSlider, ImageSlideShow);
import React from 'react';
import '../App/App.css';
import AudioPlayer from '../AudioPlayer';
import './PictureSlideshow.css'

class ImageSlider extends React.Component {

  constructor(props){
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this.state = {firstImg : '', src : 'https://www.mfiles.co.uk/mp3-downloads/bach-bourree-in-e-minor-guitar.mp3', count : 0};
    this.handleIndexChange.bind(this);
    this.Rerender.bind(this);
    this.UpdateAudio.bind(this);
  }

  handleIndexChange(e){
    this.props.handleIndexChange(e);
  }

  _handleClick(e){
    var imagePath = e.target.src.split('http://localhost:3000/')[1];
    if (imagePath ===  this.props.images[0].split('../')[1]){
      this.setState({firstImg : e.target.src, src : this.props.audioArray[0]});
      this.handleIndexChange(1);
    }
    else if (imagePath ===  this.props.images[1].split('../')[1]){
      this.setState({firstImg : e.target.src, src : this.props.audioArray[1]});
      this.handleIndexChange(2);
    }
    else if (imagePath ===  this.props.images[2].split('../')[1]){
      this.setState({firstImg : e.target.src, src : this.props.audioArray[2]});
      this.handleIndexChange(3);
    }
    else{
      this.setState({firstImg : e.target.src, src : this.props.audioArray[3]});
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
import React, { Component } from 'react';
// import * as poem from '..\\public\\words\\poem\\1.json';


class Words extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "default title",
      type: "default type",
      author: "default author",
      content: "default content",
      isLoading: false,
      error: null,
    }
    // this.loadJSON = this.loadJSON.bind(this);
    // this.updateContent = this.updateContent.bind(this);
  }

  /*
  loadJSON(filepath, callback) {
    alert(filepath);
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", filepath, true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null); 
  }
*/

/*
  updateContent(path) {
    this.loadJSON(path, function (response) {
      alert(response);
      let filecontent = JSON.parse(response);
      alert(filecontent);

      this.setState({
        title: filecontent.title,
        type: filecontent.type,
        author: filecontent.author,
        content: filecontent.content,
      });
    })
  }
  */

  // _handleEvent(e) {
  //   this.updateContent(e.target.src); // or howeer to get the path
  // }

  componentDidMount() {
    //this.setState({ isLoading: true });

    fetch('/words/poem/1.json')
      .then(response => {
        if (response.ok) {
          response.json()
          .then(data => this.setState({
            title: data.title,
            type: data.type,
            author: data.author,
            content: data.content,
          }))
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      // .then(data => this.setState({ hits: data.hits, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));   
  }


  
  render() {

    const { title, type, author, contenct, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    
    return (
      <div className="TextContainer">
        {this.state.title}
        <br></br>
        {/* {this.state.type} */}
        <br></br>
        {this.state.author}
        <br></br>
        {this.state.content}
        <br></br>
        {/* <button onClick={(e) => this.updateContent("./poem/2.json", e)}>update</button> */}
      </div>
    )
  }
}

export default Words;
// export { updateContent };

  // export function updatePath(path){
  //   this.setState({
  //     title : "Ny Tittel"});
  // 
  //     return null; 
  //   };


  //  
// https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
import React, { Component} from 'react';


class Words extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        title : "default title",
        type : "default type",
        author : "default author",
        content : "default content",
      }
    //   this.loadJSON = this.loadJSON.bind(this);
    //   this.updateContent = this.updateContent.bind(this);
    }
 
    //Noe her virker ikke helt, usikker hvorfor
    //
    // loadJSON(file, callback) {
    //     var rawFile = new XMLHttpRequest();
    //     rawFile.overrideMimeType("application/json");
    //     rawFile.open("GET", file, true);
    //     rawFile.onreadystatechange = function() {
    //         if (rawFile.readyState === 4 && rawFile.status == "200") {
    //             callback(rawFile.responseText);
    //         }
    //     }
    //     rawFile.send(null);
    // }

    // updateContent(path){
    //     loadJSON(path, function(response) {
    //         var filecontent = JSON.parse(response);

    //         this.setState({
    //             title : filecontent.title,
    //             type : filecontent.type,
    //             author : filecontent.author,
    //             content : filecontent.content,
    //           });        
    //     })
    // }
    
    
    /*

readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("/Users/Documents/workspace/test.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});

    */
  
 
    render() {
      return(
        <div>        
    
        {this.state.title}
        <br></br>
        {this.state.type}
        <br></br>
        {this.state.author}
        <br></br>
        {this.state.content}
    
        </div>
      )
    }
  
  }
  
  export default Words;

// https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
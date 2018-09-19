import React, { Component } from 'react';
import './words.css';

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
  }



  componentDidMount() {
    //this.setState({ isLoading: true });

    fetch('/words/Poem/3.json')
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

    return (
      <div className="wordContainer"> {this.state.title
        
      }
         <div className="wordTitle" > {this.state.title} </div>
         <div className="wordAuthor" > {this.state.author} </div>
         <div className="wordContent" > {this.state.content} </div>
 
        {/* <button onClick={(e) => this.updateContent("./poem/2.json", e)}>update</button> */}
        {/* this.state.content.split('\n').map((item, i) => {
                        return key={i}> {item} </p>;
                    }) */}
      </div>
    )
  }
}

export default Words;
//

/*


)*/

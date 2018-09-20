import React, { Component } from 'react';
import './words.css';

class Words extends Component {

  constructor(props) {
    super(props);

    this.words_db = {
      'Poem': ['/words/Poem/1.json', '/words/Poem/2.json', '/words/Poem/3.json', '/words/Poem/4.json'],
      'Humour': ['/words/Humour/1.json', '/words/Humour/2.json', '/words/Humour/3.json', '/words/Humour/4.json'],
      'Wisdom': ['/words/Wisdom/1.json', '/words/Wisdom/2.json', '/words/Wisdom/3.json', '/words/Wisdom/4.json']
    };

    this.state = {
      title: "default title",
      type: "default type",
      author: "default author",
      content: "default content",
      error: null,
    }
    this.updateWords = this.updateWords.bind(this);
  }

  updateWords(category, index) {
    // let paths = this.words_db[category];
    let currentPath = this.words_db[category][parseInt(index)];
    fetch(currentPath)
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
      .catch(error => this.setState({ error }));
  };


  render() {

    return (
      <div className="wordContainer">
        {this.updateWords(this.props.cat, this.props.index)}
        <div className="wordTitle" > {this.state.title} </div>
        <div className="wordAuthor" > {this.state.author} </div>
        <div className="wordContent" > {this.state.content} </div>
      </div>
    )
  }
}

export default Words;

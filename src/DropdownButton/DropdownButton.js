import React from 'react';
import './DropdownButton.css';

class DropdownButton extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {type: this.props.title, selection: ''};
  }

  handleChange(e) {
    if (this.state.type === "Picture"){
      this.props.changer(e.target.options[e.target.selectedIndex].text, this.state.type);
    }
    else if (this.state.type === "Sound"){
      this.props.changer(e.target.options[e.target.selectedIndex].text, this.state.type);
    }
    else {
      this.props.changer(e.target.options[e.target.selectedIndex].text, this.state.type)
    }
  }

  

  /* 
   * Leser fra categories-listen i App.js
   * index brukes for å gi en unik ID til liste-elementene 
   */
  table() {
    let listItems = this.props.categories.map((category) => 
        <option className="li"  selection = {category} key = {category}> { category }  </option>);
    return listItems;
  }

  /* 
   * Det som skal vises på skjerm 
   * this.props.title: navn på dropdownbuttonene
   * this.table(): de forskjellige kategoriene 
   */
  render() {
    const selection = this.props.selection;
    return (
      
      <select className="button" selection = {selection} changer = {this.props.handleStateChange} onChange={this.handleChange}> { this.props.title }>
            { this.table() }
        </select>
      
    );
  }
}

export default DropdownButton;
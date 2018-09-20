import React from 'react';
import './DropdownButton.css';

class DropdownButton extends React.Component {

  constructor(props){
    super(props);

    

    this.state = {
      displayMenu: false,
      title: this.props.title
    };

  

  /* 
   * Leser fra categories-listen i App.js
   * index brukes for å gi en unik ID til liste-elementene 
   */
  table() {

    let listItems = this.props.categories.map((category, index) => 
      <li onClick={ (e) => this.props.updateCanvas(this.props.whatDropdown, category) } className="li" key={ index }> { category }  </li>);
    return listItems;
  }

  /* 
   * Det som skal vises på skjerm 
   * this.props.title: navn på dropdownbuttonene
   * this.table(): de forskjellige kategoriene 
   */
  render() {
    return (

      <div className="dropdown">
      <div className="button" onClick={this.showDropdownMenu} key={this.props.whatDropdown}> { this.props.title } </div>
        { this.state.displayMenu ? (
          <ul className="ul">
            { this.table() }
        </ul>
      
    );
  }
}

export default DropdownButton;
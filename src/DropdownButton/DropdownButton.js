import React from 'react';
import './DropdownButton.css';

class DropdownButton extends React.Component {

  constructor(props){
    super(props);
       
    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  };
  
  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }
  
  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  /* 
   * Leser fra categorie-listen i App.js
   * index brukes for å gi en unik ID til liste-elementene 
   */
  table() {
    let listItems = this.props.categories.map((category, index) => 
      <li key={index}> { category }  </li>);
    return listItems;
  }

  /* 
   * Det som skal vises på skjerm 
   * this.props.title: navn på dropdownbuttonen
   * this.table(): de forskjellige kategoriene 
   */
  render() {
    return (
      <div className="dropdown" style={{background:"lightblue", minWidth:"20%"}}>
      <div className="button" onClick={this.showDropdownMenu}> { this.props.title } </div>
        { this.state.displayMenu ? (
          <ul>
            { this.table() }
          </ul>
        ):
        (null)
        }
      </div>
    );
  }
}

export default DropdownButton;
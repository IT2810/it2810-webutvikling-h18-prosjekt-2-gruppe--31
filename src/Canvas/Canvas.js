import React from 'react';

class Canvas extends React.Component {

    constructor(props) {
        super(props);
      }

      render() {
          console.log(this.props.all_pictures);
          console.log(this.props.picture);
          return (
              <div>
                <img src={ this.props.picture } />
                <p> Picture -  { this.props.picture } </p>
                <p> Sound - { this.props.sound } </p>
                <p> Text - { this.props.text } </p>
              </div>
          );
      }
}

export default Canvas;
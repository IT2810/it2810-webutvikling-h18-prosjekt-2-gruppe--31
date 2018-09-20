import React from 'react';

class Canvas extends React.Component {

    constructor(props) {
        super(props);
      }

      render() {
          console.log("all " + this.props.all_p);
          console.log("picture " + this.props.picture);
          return (
              <div>
                <img src={ this.props.picture } />
                <img src={ this.props.sound } />
                <img src={ this.props.text } />
                <img src={ this.props.p4 } />
                <p> Picture -  { this.props.picture } </p>
                <p> Sound - { this.props.sound } </p>
                <p> Text - { this.props.text } </p>
              </div>
          );
      }
}

export default Canvas;
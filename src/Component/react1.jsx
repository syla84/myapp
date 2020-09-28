import React, { Component } from 'react';

class Card extends Component {
  mystyle = {
    backgroundColor:"tomato"

  };

  render() {
    return (
      <div> <button>{this.props.behavior} {this.props.children}</button></div>
    );
  }

}

export default Card;

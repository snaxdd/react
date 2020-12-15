import React from 'react';

export class Button extends React.Component {
  render() {
    return(
      <button 
        href={this.props.href} 
        className={`button ${this.props.className ? this.props.className : ''}`}>
        {this.props.text}
      </button>
    );
  }
};
import React from 'react';

export class Button extends React.Component {
  render() {
    return(
      <button 
        href={this.props.href} 
        className={`button ${this.props.className ? this.props.className : ''}`}>
        <span className='button_text'>
          {this.props.text}
        </span>
      </button>
    );
  }
};
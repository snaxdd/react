import React from 'react';

export class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <a href='#' className={`button ${this.props.className ? this.props.className : ''}`}>
        <span className='button_text'>
          {this.props.text}
        </span>
      </a>
    );
  }
};
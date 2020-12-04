import React from 'react';

export class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  setIcon() {
    if (this.props.iconLeft) {
      return(
        <div className="header_menu-icon header_menu-icon--left">
          {this.props.iconLeft}
        </div>
      );
    } else if (this.props.iconRight) {
      return(
        <div className="header_menu-icon header_menu-icon--right">
          {this.props.iconRight}
        </div>
      );
    }

    return '';
  }

  render() {
    return (
      <li className='header_menu-item'>
        {this.setIcon()}
        <a 
          href='#' 
          className='header_menu-link'
        >{ this.props.text }</a>
      </li>
    );
  };
};
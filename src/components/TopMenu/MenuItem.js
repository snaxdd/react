import React from 'react';

export class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  setIcon() {
    if (this.props.iconLeft) {
      return(
        <div className="top-menu_icon top-menu_icon--left">
          {this.props.iconLeft}
        </div>
      );
    } else if (this.props.iconRight) {
      return(
        <div className="top-menu_icon top-menu_icon--right">
          {this.props.iconRight}
        </div>
      );
    }

    return '';
  }

  render() {
    return (
      <li className='top-menu_item'>
        {this.setIcon()}
        <a 
          href='#' 
          className='top-menu_item-link'
        >{ this.props.text }</a>
      </li>
    );
  };
};
import React from 'react';
import {DropDown} from './DropDown';

export class MenuItem extends React.Component {

  dropDown() {
    return this.props.dropDown
      ? <DropDown dropDown={this.props.dropDown}/>
      : null;
  }

  render() {
    return (
      <li className='header_menu-item'>
        <a href={this.props.href} className='header_menu-link'>
          {this.props.text}
        </a>
        {this.dropDown()}
      </li>
    );
  };
};
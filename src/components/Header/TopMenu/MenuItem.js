import React from 'react';
import {DropDown} from './DropDown';

export class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.menuButton = React.createRef();
  }

  render() {
    return (
      <li className='header_menu-item'> 
        <a 
          onClick={this.props.handleDropdown} 
          href={this.props.href} 
          className='header_menu-link'>
          {this.props.iconL}
          {this.props.text}
          {this.props.iconR}
        </a>
        {
          this.props.dropDown &&
          <DropDown 
            dropDown={this.props.dropDown} 
            isOpen={this.props.isDropDown}
          /> 
        }
      </li>
    );
  };
};
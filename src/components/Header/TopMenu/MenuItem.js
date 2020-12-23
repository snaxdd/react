import React from 'react';
import { DropDown } from './DropDown';

export class MenuItem extends React.Component {
  render() {
    return (
      <li className='header_menu-item' data-index={this.props.dataAttrIndex} >
        <a
          href={this.props.href}
          className='header_menu-link'
          onClick={() => this.props.handleDropdown(this.props.dataAttrIndex)}
        >
          {this.props.iconL}
          {this.props.text}
          {this.props.iconR}
        </a>
        {this.props.dropDown && (
          <DropDown
            dropDown={this.props.dropDown}
            isOpen={this.props.activeDropdownId === this.props.dataAttrIndex}
          />
        )}
      </li>
    );
  }
}

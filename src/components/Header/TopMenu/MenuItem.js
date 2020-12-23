import React from 'react';
import { DropDown } from './DropDown';

export class MenuItem extends React.Component {
  render() {
    return (
      <li className='header_menu-item' data-attr={this.props.dataAttr}>
        <a
          onClick={() => this.props.handleDropdown(this.props.dataAttr)}
          href={this.props.href}
          className='header_menu-link'
        >
          {this.props.iconL}
          {this.props.text}
          {this.props.iconR}
        </a>
        {this.props.dropDown && (
          <DropDown
            dropDown={this.props.dropDown}
            isOpen={this.props.isDropDown}
          />
        )}
      </li>
    );
  }
}

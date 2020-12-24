import React from 'react';
import { MenuItem } from './MenuItem';

export class Menu extends React.Component {
  render() {
    return (
      <ul className='header_menu-list'>
        {this.props.menu.map((item, index) => {
          return (
            <MenuItem
              iconR={item.iconR}
              iconL={item.iconL}
              key={item.id}
              text={item.title}
              href={item.href}
              dropDown={item.dropDown}
              dataAttrIndex={index}
              activeDropdownId={this.props.activeDropdownId}
              handleDropdown={this.props.handleDropdown}
            />
          );
        })}
      </ul>
    );
  }
}

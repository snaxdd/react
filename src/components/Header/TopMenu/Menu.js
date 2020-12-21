import React from 'react';
import {MenuItem} from './MenuItem';

export class Menu extends React.Component {
  render() {
    return (
      <ul className='header_menu-list'>
        <MenuItem
          text={this.props.menu[0].title}
          dropDown={this.props.menu[0].dropDown}
          href={this.props.menu[0].href}/>
        <MenuItem
          text={this.props.menu[1].title}
          dropDown={this.props.menu[1].dropDown}
          href={this.props.menu[1].href}
          iconL={this.props.menu[1].iconL}/>
        <MenuItem
          text={this.props.menu[2].title}
          dropDown={this.props.menu[2].dropDown}
          href={this.props.menu[2].href}
          handleDropdown={() => this.props.handleDropdown('shop')}
          isDropDown={this.props.activeDropown === 'shop'}
          iconR={this.props.menu[2].iconR}
          />
        <MenuItem
          text={this.props.menu[3].title}
          dropDown={this.props.menu[3].dropDown}
          href={this.props.menu[3].href}
          handleDropdown={() => this.props.handleDropdown('buyer')}
          isDropDown={this.props.activeDropown === 'buyer'}
          iconR={this.props.menu[3].iconR}
          />
        <MenuItem
          text={this.props.menu[4].title}
          dropDown={this.props.menu[4].dropDown}
          href={this.props.menu[4].href}
          />
      </ul>
    );
  };
};
import React from 'react';

export class DropDownItem extends React.Component {
  render() {
    return(
      <li className="header_menu-dropdown-item">
        <a 
          className="header_menu-dropdown-link"
          href={this.props.href}>
          {this.props.text}
        </a>
      </li>
    );
  };
};
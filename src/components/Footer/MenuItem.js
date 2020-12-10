import React from 'react';

export class MenuItem extends React.Component {
  render() {
    return(
      <li className="footer_menu-item">
        <a 
          href={this.props.href} 
          className="footer_menu-link"
        >
          {this.props.text}
        </a>
      </li>
    );
  };
}
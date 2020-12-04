import React from 'react';

export class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

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
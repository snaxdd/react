import React from 'react';

export class MenuInnerItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="footer-mobile_inner-item">
        <a href={this.props.href} className="footer-mobile_inner-link">
          {this.props.text}
        </a>
      </li>
    );
  };
};
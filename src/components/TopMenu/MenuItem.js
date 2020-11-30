import React from 'react';

export class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <li className="top-menu_item">
        <a href="#" className="top-menu_item-link">{ this.props.text }</a>
      </li>
    );
  };
};
import React from 'react';
import {ReactComponent as IconArrowRight} from './../../../assets/icons/arrow.svg';

export class LeftListItem extends React.Component {
  constructor(props) {
    super(props);
    this.index = this.props.index;
  }
  
  render() {
    return(
      <li className={`catalog_left-list-item${this.props.active ? 
      ' catalog_left-list-item--active' : ''}`}
        onClick={() => this.props.setCurrent(this.index)}
        >
        <a href="/#" className="catalog_left-list-link">
          {this.props.text}
        </a>
        <IconArrowRight className="catalog_left-list-icon" />
      </li>
    );
  }
};
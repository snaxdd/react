import React from 'react';
import {ReactComponent as IconArrowRight} from './../../../assets/icons/arrow.svg';

export class LeftListItem extends React.Component {
  render() {
    return(
      <li className={`catalog_left-list-item${this.props.active ? ' catalog_left-list-item--active' : ''}`}>
        <a href="/#" className="catalog_left-list-link">
          {this.props.text}
        </a>
        <IconArrowRight className="catalog_left-list-icon" />
      </li>
    );
  }
};
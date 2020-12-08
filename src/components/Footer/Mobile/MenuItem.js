import React from 'react';
import { MenuInnerItem } from './MenuInnerItem';

export class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="footer-mobile_list-item">
        <span className="footer-mobile_list-heading">
          {this.props.title}
        </span>
        <ul className="footer-mobile_inner-list">
          {
            this.props.innerLinks.map(item => {
              return(
                <MenuInnerItem 
                key={item.id}
                href={item.href}
                text={item.text}
                />
              )
            })
          }
        </ul>
      </li>
    );
  };
};
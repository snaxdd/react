import React from 'react';
import {ReactComponent as IconArrow} from './../../assets/icons/Spoiler/arrow.svg';

export class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="faq_item">
        {this.props.title}
        <IconArrow 
          className="faq_item-icon"
        />
      </li>
    );
  }
};
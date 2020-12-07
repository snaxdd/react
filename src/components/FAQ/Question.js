import React from 'react';

export class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="faq_item">
        {this.props.title}
      </li>
    );
  }
};
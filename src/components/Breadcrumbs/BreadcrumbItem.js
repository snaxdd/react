import React from 'react';

export class BreadcrumbsItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <li className='breadcrumbs_item'>
        <a href='#' className='breadcrumbs_item-link'>
          {this.props.text}
        </a>
      </li>
    );
  };
};
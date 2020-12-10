import React from 'react';

export class BreadcrumbsItem extends React.Component {
  render() {
    return(
      <li className='breadcrumbs_item'>
        <a href={this.props.href} className='breadcrumbs_item-link'>
          {this.props.text}
        </a>
      </li>
    );
  };
};
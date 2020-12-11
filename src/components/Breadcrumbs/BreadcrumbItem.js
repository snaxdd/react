import React from 'react';

export class BreadcrumbsItem extends React.Component {
  render() {
    return (
      <li className='breadcrumbs_item'>
        {this.props.href
          ? <a href={this.props.href} className='breadcrumbs_item-link'>
              {this.props.text}
            </a>
          : this.props.text
        }
      </li>
    );
  };
};
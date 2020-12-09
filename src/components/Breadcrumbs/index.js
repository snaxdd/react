import React from 'react';
import {BreadcrumbsItem} from './BreadcrumbItem';

export class Breadcrumbs extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul className='breadcrumbs_list'>
        {this
          .props
          .breadcrumbs
          .map((item, indexItem, arr) => {
            return (<BreadcrumbsItem
              text={item + (indexItem !== arr.length - 1
              ? ' / '
              : '')}
              href={indexItem === arr.length - 1 ? '' : '#'}
              key={item + Math.random()}/>)
          })}
      </ul>
    );
  };
};

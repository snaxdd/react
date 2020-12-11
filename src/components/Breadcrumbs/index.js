import React from 'react';
import {BreadcrumbsItem} from './BreadcrumbItem';

export class Breadcrumbs extends React.Component {
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
              href={indexItem === arr.length - 1 ? null : '#'}
              key={item + Math.random()}/>)
          })}
      </ul>
    );
  };
};

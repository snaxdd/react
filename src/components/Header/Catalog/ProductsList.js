import React from 'react';
import { ProductItem } from './ProductItem';

export class ProductsList extends React.Component {
  render() {
    return (
      <li className="catalog_products-category">
        <span className="catalog_products-category-heading">
          {this.props.categories.heading}
        </span>

        <ul className="catalog_products-list">
          {
            this.props.categories.products.map(item => {
              return <ProductItem href={item.href} text={item.title}/>;
            })
          }
        </ul>
      </li>
    );
  };
};
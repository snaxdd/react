import React from 'react';

export class ProductItem extends React.Component {
  render() {
    return(
      <li className="catalog_products-category-item">
        <a href={this.props.href} className="catalog_products-category-link">
          {this.props.text}
        </a>
      </li>
    );
  };
};
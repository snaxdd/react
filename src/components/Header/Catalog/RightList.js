import React from 'react';
import { ProductsList } from './ProductsList';

export class RightList extends React.Component {
  render() {
    return (
      <div className="catalog_right-list">
        <span className="catalog_right-list-heading">
          {this.props.catalog[this.props.currentItem].heading}
        </span>

        <div className="catalog_products-wrap">
          <ul className="catalog_products">
            {
              this.props.catalog[this.props.currentItem].categories.map((item, index) => {
                return <ProductsList 
                  categories={item}
                  key={Math.random()}
                />;
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
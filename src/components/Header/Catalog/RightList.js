import React from 'react';

export class RightList extends React.Component {
  render() {
    return(
      <div className="catalog_right-list">
        <span className="catalog_right-list-heading">
          Весь ассортимент
        </span>

        <div className="catalog_products-wrap">
          <ul className="catalog_products">
            <li className="catalog_products-category">
              <span className="catalog_products-category-heading">Heading</span>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
            </li>
            <li className="catalog_products-category">
              <span className="catalog_products-category-heading">Heading</span>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
            </li>
            <li className="catalog_products-category">
              <span className="catalog_products-category-heading">Heading</span>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
            </li>
            <li className="catalog_products-category">
              <span className="catalog_products-category-heading">Heading</span>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
              <li className="catalog_products-category-item">list item</li>
            </li>
          </ul>
        </div>
      </div>
    );
  };
};
import React from 'react';

export class Ingredient extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="ingredients_row">
        <div className="ingredients_product">
          <div className="ingredients_product-name">
            {this.props.product}
          </div>
          <div className="ingredients_product-count">
            {this.props.productCount}
          </div>
        </div>
      </div>
    );
  };
}
import React from 'react';

export class NutritionalValueItem extends React.Component {
  render() {
    return(
      <div className='nutritional-value_item'>
        <div className="nutritional-value_icon">
          {this.props.image}
        </div>
        <span className="nutritional-value_title">
          {this.props.title}
        </span>
        <div className="nutritional-value_weight">
          {this.props.weight}
          <span className="nutritional-value_weight-unit">
            {this.props.weightUnit}
          </span>
        </div>
      </div>
    );
  };
};
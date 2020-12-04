import React from 'react';

export class NutritionalValueItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='nutritional-value_item'>
        {this.props.image}
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
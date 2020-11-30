import { ReactComponent } from '*.svg';
import React from 'react';

export class NutritionalValue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="nutritional-value">
        <div className="nutritional-value_item"></div>
        <div className="nutritional-value_item"></div>
        <div className="nutritional-value_item"></div>
        <div className="nutritional-value_item"></div>
      </div>
    );
  };
};
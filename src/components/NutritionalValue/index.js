import React from 'react';
import { NutritionalValueItem } from './NutritionalValueItem';

export class NutritionalValue extends React.Component {
  render() {
    return (
      <div className='nutritional-value_wrap'>
        <h2 className='section_heading nutritional-value_heading'>
          Пищевая ценность
        </h2>
        <div className='nutritional-value recipe_nutritional-value'>
          <div className='nutritional-value_values-wrap'>
            {this.props.data.map((item) => {
              return (
                <NutritionalValueItem
                  image={item.image}
                  key={item.id}
                  title={item.title}
                  weight={item.weight}
                  weightUnit={item.weightUnit}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react';
import { NutritionalValueItem } from './NutritionalValueItem';

export class NutritionalValue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='nutritional-value recipe_nutritional-value'>
        {this.props.data.map(item => {
          return(
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
    );
  };
};
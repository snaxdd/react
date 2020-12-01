import React from 'react';
import { ReactComponent as Meat } from './../../assets/icons/NutritionalValue/Meat.svg';
import { ReactComponent as Pizza } from './../../assets/icons/NutritionalValue/Pizza.svg';
import { ReactComponent as Rice } from './../../assets/icons/NutritionalValue/Rice.svg';
import { ReactComponent as Calories } from './../../assets/icons/NutritionalValue/Calories.svg';

export class NutritionalValue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='nutritional-value recipe_nutritional-value'>
        <div className='nutritional-value_item'>
          <Meat className='nutritional-value_icon' />
          <span className="nutritional-value_title">
            белки
          </span>
          <div className="nutritional-value_weight">
            120
            <span className="nutritional-value_weight-unit">
              грамм
            </span>
          </div>
        </div>
        <div className='nutritional-value_item'>
          <Pizza />
          <span className="nutritional-value_title">
            жиры
          </span>
          <div className="nutritional-value_weight">
            12
            <span className="nutritional-value_weight-unit">
              грамм
            </span>
          </div>
        </div>
        <div className='nutritional-value_item'>
          <Rice />
          <span className="nutritional-value_title">
            углеводы
          </span>
          <div className="nutritional-value_weight">
            230
            <span className="nutritional-value_weight-unit">
              грамм
            </span>
          </div>
        </div>
        <div className='nutritional-value_item'>
          <Calories />
          <span className="nutritional-value_title">
            калорийность
          </span>
          <div className="nutritional-value_weight">
            387
            <span className="nutritional-value_weight-unit">
              грамм
            </span>
          </div>
        </div>
      </div>
    );
  };
};
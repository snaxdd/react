import React from 'react';
import ImageTitle from '../../assets/images/Ingredients/title-img.png';
import {BuyButton} from '../BuyButton/index';
import {Ingredient} from '../Ingredients/Ingredient';

export class Ingredients extends React.Component {
  render() {
    return (
      <div
        className="ingredients">
        <span className="ingredients_heading">
          Ингредиенты
        </span>
        
        <div className="ingredients_wrap">
          <div className="ingredients_row">
            <div className="ingredients_header">
              <img src={ImageTitle} alt="fish" className="ingredients_header-img"/>

              <span className="ingredients_title">
                {this.props.data.title}
              </span>

              <span className="ingredients_recipe-weight">
                {this.props.data.recipeWeight}
              </span>

              <BuyButton text="Купить" class="ingredients_buy-button"/>
            </div>
          </div>

          {this
            .props
            .data
            .ingredients
            .map(item => {
              return (<Ingredient key={Math.random()} product={item.name} productCount={item.count}/>);
            })}
        </div>
      </div>
    );
  };
};
import React from 'react';
import TitleImg from '../../assets/images/Ingredients/title-img.png';
import { BuyButton } from '../BuyButton/index';
import { Ingredient } from '../Ingredients/Ingredient';

export class Ingredients extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='ingredients'>
        <div className="ingredients_row">
          <div className="ingredients_header">
            <img 
              src={ TitleImg } 
              alt="fish" 
              className="ingredients_header-img"
            />

            <span className="ingredients_title">
              {this.props.data.title}
            </span>

            <span className="ingredients_recipe-weight">
              {this.props.data.recipeWeight}
            </span>

            <BuyButton 
              text="Купить"
              class="ingredients_buy-button"
            />
          </div>
        </div>

        {this.props.data.ingredients.map(item => {
          return(
            <Ingredient 
              key={Math.random()}
              product={item.name}
              productCount={item.count}
            />
          );
        })}
      </div>
    );
  };
};
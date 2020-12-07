import React from 'react';
import ImageTitle from '../../assets/images/Ingredients/title-img.png';
import { BuyButton } from '../BuyButton/index';
import { Ingredient } from '../Ingredients/Ingredient';
import { ReactComponent as IconArrow } from '../../assets/icons/Spoiler/arrow.svg';

export class Ingredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spoiler: true
    }
  }

  handleSpoiler = () => {
    this.setState({
      spoiler: !this.state.spoiler
    });
  };

  render() {
    return(
      <div className={`ingredients ${this.props.theme ? `ingredients--${this.props.theme}` : ''}`}>
        <span className="ingredients_heading">
          Ингредиенты
        </span>
        <div 
          className="ingredients_spoiler"
          onClick={() => this.handleSpoiler()}
        >
          Ингредиенты
          <IconArrow 
            className="ingredients_spoiler-icon"
          />
        </div>
        <div 
          className="ingredients_wrap"
          style={
            {display: this.state.spoiler ? 'block' : 'none'}
          }
        >
        <div className="ingredients_row">
          <div className="ingredients_header">
            <img 
              src={ ImageTitle } 
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
      </div>
    );
  };
};
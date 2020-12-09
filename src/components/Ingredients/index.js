import React, { useState } from 'react';
import ImageTitle from '../../assets/images/Ingredients/title-img.png';
import { BuyButton } from '../BuyButton/index';
import { Ingredient } from '../Ingredients/Ingredient';
import { ReactComponent as IconArrow } from '../../assets/icons/Spoiler/arrow.svg';

export class Ingredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentBlockHeight: 0,
      contentOpen: true
    }
    this.refHiddenContent = React.createRef();
    this.refButton = React.createRef();
  }

  handleDropDown = () => {
    let newContentOpen = !this.state.contentOpen;
    
    this.setState({
      contentOpen: newContentOpen
    })
    
    if (this.state.contentOpen) {
      this.refHiddenContent.current.style.height = this.state.contentBlockHeight + "px";
    } else {
      this.refHiddenContent.current.style.height = "0px";
    }
  };

  componentDidMount = () => {
    this.setState({
      contentBlockHeight: this.refHiddenContent.current.clientHeight
    })

    this.refHiddenContent.current.style.height = "0px";
    this.refHiddenContent.current.style.overflow = 'hidden';
  }

  componentWillUnmount = () => {
    this.refButton.current.removeEventListener('click', this.handleDropDown);
  }

  render() {
    return(
      <div className={`ingredients ${this.props.theme ? `ingredients--${this.props.theme}` : ''}`}>
        <span className="ingredients_heading">
          Ингредиенты
        </span>
        <div 
          ref={this.refButton}
          className="ingredients_spoiler"
          onClick={() => this.handleDropDown()}
        >
          Ингредиенты
          <IconArrow 
            className="ingredients_spoiler-icon ingredients_spoiler-icon--dark"
          />
        </div>
        <div
          ref={this.refHiddenContent} 
          className={`ingredients_wrap`}
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
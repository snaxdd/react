import React from 'react';
import {ReactComponent as IconArrow} from '../../assets/icons/Spoiler/arrow.svg';
import {Ingredient} from './Ingredient';
import {BuyButton} from './../BuyButton/index';

export class IngredientsMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentBlockHeight: 0,
      contentOpen: false
    }
    this.refHiddenContent = React.createRef();
    this.refButton = React.createRef();
  };

  handleDropDown = () => {
    let newContentOpen = !this.state.contentOpen;

    this.setState({contentOpen: newContentOpen})

    if (this.state.contentOpen) {
      this.refHiddenContent.current.style.height = this.state.contentBlockHeight + "px";
    } else {
      this.refHiddenContent.current.style.height = "0px";
    }
  };

  componentDidMount = () => {
    this.setState({contentBlockHeight: this.refHiddenContent.current.clientHeight})

    this.refHiddenContent.current.style.height = "0px";
    this.refHiddenContent.current.style.overflow = 'hidden';

    this
      .refButton
      .current
      .addEventListener('click', this.handleDropDown);
  }

  componentWillUnmount = () => {
    this
      .refButton
      .current
      .removeEventListener('click', this.handleDropDown);
  }

  render() {
    return (
      <div className="ingredients-mobile recipe_ingredients-mobile">
        <button ref={this.refButton} className="ingredients-mobile_dropdown">
          Ингредиенты
          <IconArrow className="ingredients-mobile_dropdown-icon"/>
        </button>

        <div
          ref={this.refHiddenContent}
          className="ingredients-mobile_ingredients-wrap">
          <div className="ingredients-mobile_header">
            <img
              src={this.props.data.image}
              alt="recipe-image"
              className="ingredients-mobile_header-img"/>

            <span className="ingredients-mobile_header-title">
              {this.props.data.title}
            </span>

            <span className="ingredients-mobile_header-weight">
              {this.props.data.recipeWeight}
            </span>

            <BuyButton text="Купить" class="ingredients-mobile_header-button"/>
          </div>
          <div className="ingredients-mobile_table">
            {this
              .props
              .data
              .ingredients
              .map(item => {
                return (<Ingredient key={Math.random()} product={item.name} productCount={item.count}/>);
              })}
          </div>
        </div>
      </div>
    );
  };
};
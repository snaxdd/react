import React from 'react';
import Preview from './../../../assets/images/SimilarRecipes/preview3.jpg';
import { ReactComponent as IconStar } from '../../../assets/icons/Reviews/star.svg';
import { ReactComponent as IconCalories} from '../../../assets/icons/Calories.svg';
import { ReactComponent as IconTimer } from '../../../assets/icons/Timer.svg';

export class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <article className="similar-recipes_card">
        <div className="similar-recipes_card-image-wrap">
          <img 
            src={Preview} 
            alt=""
            className="similar-recipes_card-image"
          />
        </div>

        <div className="similar-recipes_card-description">
          <div className="similar-recipes_card-rate">
            <IconStar className="similar-recipes_card-star"/>
            <IconStar className="similar-recipes_card-star"/>
            <IconStar className="similar-recipes_card-star"/>
            <IconStar className="similar-recipes_card-star"/>
            <IconStar className="similar-recipes_card-star"/>
            <div className="similar-recipes_card-reviews-count">
              {this.props.reviewsCount}
            </div>
          </div>

          <h3 className="similar-recipes_card-title">
            {this.props.title}
          </h3>

          <p className="similar-recipes_card-text">
            {this.props.text}
          </p>

          <div className="similar-recipes_cooking">
            <div className="similar-recipes_cooking-wrap">
              <IconTimer className="similar-recipes_cooking-timer"/>
              <span className="similar-recipes_cooking-time">
                {this.props.cookingTime}
              </span>
            </div>
            
            <div className="similar-recipes_calories">
              <IconCalories className="similar-recipes_calories-icon"/>
              <span className="similar-recipes_calories-text">
                {this.props.calories}
              </span>
            </div>
          </div>

        </div>
      </article>
    );
  };
};
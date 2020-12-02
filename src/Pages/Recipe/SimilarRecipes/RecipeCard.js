import React from 'react';
import Preview from './../../../assets/images/SimilarRecipes/preview3.jpg';
import { ReactComponent as Star } from '../../../assets/icons/Reviews/star.svg';
import { ReactComponent as Calories} from '../../../assets/icons/Calories.svg';
import { ReactComponent as Timer } from '../../../assets/icons/Timer.svg';

export class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <article className="similar-recipes-card">
        <div className="similar-recipes-card_image-wrap">
          <img 
            src={Preview} 
            alt=""
            className="similar-recipes-card_image"
          />
        </div>

        <div className="similar-recipes-card_description">
          <div className="similar-recipes-card_rate">
            <Star className="similar-recipes-card_star"/>
            <Star className="similar-recipes-card_star"/>
            <Star className="similar-recipes-card_star"/>
            <Star className="similar-recipes-card_star"/>
            <Star className="similar-recipes-card_star"/>
            <div className="similar-recipes-card_reviews-count">
              {this.props.reviewsCount}
            </div>
          </div>

          <h3 className="similar-recipes-card_title">
            {this.props.title}
          </h3>

          <p className="similar-recipes-card_text">
            {this.props.text}
          </p>

          <div className="similar-recipes-card_cooking-props">
            <div className="similar-recipes-card_cooking-time">
              <Timer className="similar-recipes-card_timer-icon"/>
              <span className="similar-recipes-card_cooking-time-text">
                {this.props.cookingTime}
              </span>
            </div>
            
            <div className="similar-recipes-card_calories">
              <Calories className="similar-recipes-card_calories-icon"/>
              <span className="similar-recipes-card_calories-text">
                {this.props.calories}
              </span>
            </div>
          </div>

        </div>
      </article>
    );
  };
};
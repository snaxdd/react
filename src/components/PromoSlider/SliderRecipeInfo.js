import React from 'react';
import {ReactComponent as IconComplexity} from "../../assets/icons/Complexity.svg";
import {ReactComponent as IconTimer} from "../../assets/icons/Timer.svg";
import {ReactComponent as IconCalories} from "../../assets/icons/Calories.svg";

export class SliderRecipeInfo extends React.Component {
  render() {
    return (
      <div className="promo-slider_recipe-info">
        <h2 className="promo-slider_recipe-title">
          Семга, запечённая в духовке
        </h2>

        <div className='promo-slider_props'>
          <ul className='promo-slider_props-group'>
            <li className='promo-slider_props-item'>
              <div className='promo-slider_props-icon'>
                <IconComplexity className='promo-slider_props-icon-complexity'/>
              </div>
              {this.props.complexity}
            </li>
            <li className='promo-slider_props-item'>
              <div className='promo-slider_props-icon'>
                <IconTimer className='promo-slider_props-icon-timer'/>
              </div>
              {this.props.timer}
            </li>
            <li className='promo-slider_props-item'>
              <div className='promo-slider_props-icon'>
                <IconCalories className='promo-slider_props-icon-calories'/>
              </div>
              {this.props.kkal}
            </li>
          </ul>
        </div>
      </div>
    );
  };
};
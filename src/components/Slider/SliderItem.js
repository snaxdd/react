import React from 'react';
import { ReactComponent as IconComplexity } from '../../assets/icons/Complexity.svg';
import { ReactComponent as IconTimer } from '../../assets/icons/Timer.svg';
import { ReactComponent as IconCalories } from '../../assets/icons/Calories.svg';
import { ReactComponent as IconFavWhite } from '../../assets/icons/FavWhite.svg';
import { ReactComponent as IconPrintWhite } from '../../assets/icons/PrintWhite.svg';
import { ReactComponent as IconShareWhite } from '../../assets/icons/ShareWhite.svg';


export class SliderItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <article className='slider_item'>
        <div className='slider_user-actions'>
          <div className='slider_user-actions-icon'>
            <a href='#' className='slider_user-actions-link'><IconFavWhite /></a>
          </div>
          <div className='slider_user-actions-icon'>
            <a href='#' className='slider_user-actions-link'><IconPrintWhite /></a>
          </div>
          <div className='slider_user-actions-icon'>
            <a href='#' className='slider_user-actions-link'><IconShareWhite /></a>
          </div>
        </div>
        <h2 className='slider_title'>
          { this.props.slideData.title }
        </h2>
        <div className='slider_props'>
          <ul className='slider_props-group'>
            <li className='slider_props-item'>
              <div className='slider_props-icon'>
                <IconComplexity className='slider_props-icon-complexity'/>
              </div>
              { this.props.slideData.properties.complexity }
            </li>
            <li className='slider_props-item'>
              <div className='slider_props-icon'>
                <IconTimer className='slider_props-icon-svg'/>
              </div>
              { this.props.slideData.properties.timer }
            </li>
            <li className='slider_props-item'>
              <div className='slider_props-icon'>
                <IconCalories className='slider_props-icon-calories'/>
              </div>
              { this.props.slideData.properties.kkal }
            </li>
          </ul>
        </div>
        <div className='slider_image-container'>
          <img src={ this.props.slideData.image } alt='some' className='slider_image'/>
        </div>
      </article>
    );
  };
};
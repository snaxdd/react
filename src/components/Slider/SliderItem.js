import React from 'react';
import { ReactComponent as Complexity } from '../../assets/icons/Complexity.svg';
import { ReactComponent as Timer } from '../../assets/icons/Timer.svg';
import { ReactComponent as Calories } from '../../assets/icons/Calories.svg';
import { ReactComponent as FavWhite } from '../../assets/icons/FavWhite.svg';
import { ReactComponent as PrintWhite } from '../../assets/icons/PrintWhite.svg';
import { ReactComponent as ShareWhite } from '../../assets/icons/ShareWhite.svg';


export class SliderItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <article className="slider_item">
        <div className="slider_user-actions">
          <div className="slider_user-actions-icon">
            <a href="#" className="slider_user-actions-link"><FavWhite /></a>
          </div>
          <div className="slider_user-actions-icon">
            <a href="#" className="slider_user-actions-link"><PrintWhite /></a>
          </div>
          <div className="slider_user-actions-icon">
            <a href="#" className="slider_user-actions-link"><ShareWhite /></a>
          </div>
        </div>
        <h2 className="slider_title">
          { this.props.slideData.title }
        </h2>
        <div className="slider_props">
          <ul className="slider_props-group">
            <li className="slider_props-item">
              <div className="slider_props-icon">
                <Complexity />
              </div>
              { this.props.slideData.properties.complexity }
            </li>
            <li className="slider_props-item">
              <div className="slider_props-icon">
                <Timer />
              </div>
              { this.props.slideData.properties.timer }
            </li>
            <li className="slider_props-item">
              <div className="slider_props-icon">
                <Calories />
              </div>
              { this.props.slideData.properties.kkal }
            </li>
          </ul>
        </div>
        <div className="slider_image-container">
          <img src={ this.props.slideData.image } alt="some" className="slider_image"/>
        </div>
      </article>
    );
  };
};
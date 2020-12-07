import React from 'react';
import {ReactComponent as IconStar} from './../../../assets/icons/Reviews/star.svg';
import {ReactComponent as IconArrowDown} from './../../../assets/icons/Reviews/arrow-down.svg';
import {Button} from '../../../components/Button/index';
import {ReactComponent as IconSortingArrow} from '../../../assets/icons/Reviews/SortingArrow.svg';

export class ReviewHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="reviews_header-wrap">
        <div className="reviews_heading--mobile">
          Отзывы
        </div>
        <div className="reviews_header">
          <div className="reviews_header-rate">
            <span className="reviews_header-rate-text">
              {this.props.text}
            </span>
            <div className="reviews_header-star-wrap">
              {Array(5)
                .fill(0)
                .map((item, index) => {
                  if (index < this.props.overallRate) {
                    return <IconStar className='reviews-star reviews-star--active' key={Math.random()}/>;
                  }
                  return <IconStar className='reviews-star' key={Math.random()}/>;
                })}
              <span className="reviews_header-comments-number">
                {this.props.commentsNumber}
              </span>
            </div>
          </div>

          <Button text="Написать комментарий" className="reviews_header-button"/>

          <div className="reviews_header-sorting">
            <IconSortingArrow 
              className="reviews_header-sorting-arrow"
            />
            <span className="reviews_header-sorting-text reviews_header-sorting-text--pc">
              Самые полезные
            </span>
            <span className="reviews_header-sorting-text reviews_header-sorting-text--mobile">
              По популярности
            </span>
            <IconArrowDown className="reviews_header-sorting-icon"/>
          </div>
        </div>
      </div>
    );
  };
};
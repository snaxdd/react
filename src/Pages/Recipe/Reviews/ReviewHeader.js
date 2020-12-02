import React from 'react';
import { ReactComponent as Star } from './../../../assets/icons/Reviews/star.svg';
import { ReactComponent as ArrowDown } from './../../../assets/icons/Reviews/arrow-down.svg';
import { Button } from '../../../components/Button/index';

export class ReviewHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="reviews_header">
        <div className="reviews_header-rate">
          <span className="reviews_header-rate-text">
            {this.props.text}
          </span>
          <div className="reviews_header-star-wrap">
            {Array(5).fill(0).map((item, index) => {
              if (index < this.props.overallRate) {
                return <Star 
                  className='reviews-star reviews-star--active'
                  key={Math.random()}
                />;
              }
              return <Star 
                className='reviews-star'
                key={Math.random()}
              />;
            })}
          </div>
          <span className="reviews_header-comments-number">
            {this.props.commentsNumber}
          </span>
        </div>

        <Button 
          text="Написать комментарий" 
          className="reviews_header-button"
        />

        <div className="reviews_header-sorting">
          <span className="reviews_header-sorting_text">
            Самые полезные
          </span>
          <ArrowDown />
        </div>
      </div>
    );
  };
};
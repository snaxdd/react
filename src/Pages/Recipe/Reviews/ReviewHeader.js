import React from 'react';
import { ReactComponent as IconStar } from './../../../assets/icons/Reviews/star.svg';
import { ReactComponent as IconArrowDown } from './../../../assets/icons/Reviews/arrow-down.svg';
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
                return <IconStar 
                  className='reviews-star reviews-star--active'
                  key={Math.random()}
                />;
              }
              return <IconStar 
                className='reviews-star'
                key={Math.random()}
              />;
            })}
            <span className="reviews_header-comments-number" >
            {this.props.commentsNumber}
            </span>
          </div>
        </div>

        <Button 
          text="Написать комментарий" 
          className="reviews_header-button"
        />

        <div className="reviews_header-sorting">
          <span className="reviews_header-sorting-text">
            Самые полезные
          </span>
          <IconArrowDown 
            className="reviews_header-sorting-icon"
          />
        </div>
      </div>
    );
  };
};
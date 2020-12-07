import React from 'react';
import { ReviewHeader } from './ReviewHeader';
import { Review } from './Review';
import { Button } from '../../../components/Button/index';

export class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="reviews_wrap">
        <ReviewHeader 
          text={this.props.reviewsData.overallRating.text}
          overallRate={this.props.reviewsData.overallRating.rate}
          commentsNumber={this.props.reviewsData.overallRating.commentsNumber}
        />
        {
          this.props.reviewsData.comments.map((item, index, arr) => {
            return(
              <Review 
                key={item.id}
                userName={item.name}
                publishDate={item.date}
                rate={item.rate}
                image={item.image}
                comment={item.comment}
                last={index === arr.length - 1 ? true : false}
              />
            );
          })
        }

        <div className="reviews_mobile-btn-wrap">
          <Button text="Написать комментарий"/>
        </div>
      </div>
    );
  };
};
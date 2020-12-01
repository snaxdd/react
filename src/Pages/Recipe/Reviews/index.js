import React from 'react';
import { ReviewHeader } from './ReviewHeader';

export class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="reviews-wrap">
        <ReviewHeader 
          text={this.props.reviewsData.overallRating.text}
          overallRate={this.props.reviewsData.overallRating.rate}
          commentsNumber={this.props.reviewsData.overallRating.commentsNumber}
        />
      </div>
    );
  };
};
import React from 'react';
import {ReactComponent as IconClose} from './../../assets/icons/close.svg';
import ThankYouImage from './../../assets/images/Feedback/thankYou.png';

export class FeedbackThankYou extends React.Component {
  render() {
    return (
      <div className="feedback_thank-you">
        <img src={ThankYouImage} alt="thank-you" className="feedback_thank-you-img"/>
        <span className="feedback_thank-you-heading">
          Спасибо, что поделились своим мнением!
        </span>
        <p className="feedback_thank-you-text">
          Как только отзыв пройдет модерацию, <br />он будет опубликован на сайте
        </p>
        <IconClose className="feedback_close"/>
      </div>
    );
  };
};
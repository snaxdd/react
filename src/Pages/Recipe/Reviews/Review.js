import React from 'react';
import Avatar from './../../../assets/images/Reviews/avatar.png';
import { ReactComponent as IconStar } from '../../../assets/icons/Reviews/star.svg';

export class Review extends React.Component {
  render() {
    return(
      <div className={`reviews_comment ${this.props.last ? 'reviews_comment--last' : ''}`}>
        <img src={Avatar} alt="" className="reviews_comment-avatar"/>
        <div className="reviews_comment-wrap">
          
          <div className="reviews_comment-header">
            <h3 className="reviews_comment-user-name">
              {this.props.userName}
            </h3>
            <div className="reviews_comment-publish-date">
              {this.props.publishDate}
            </div>
          </div>

          <div className="reviews_comment-rate">
            <div className="reviews_comment-stars-wrap">
              {Array(5).fill(0).map((item, index) => {
                if (index < this.props.rate) {
                  return <IconStar 
                    className='reviews_comment-user-star reviews_comment-user-star--active'
                    key={Math.random()}
                  />;
                }
                return <IconStar 
                  className='reviews_comment-user-star'
                  key={Math.random()}
                />;
              })}
            </div>
            <div className="reviews_comment-rate-count">
              {this.props.rate}
            </div>
          </div>

          <p className="reviews_comment-text">
            {this.props.comment} 
          </p>
          
          {
            this.props.image ? <img src={this.props.image} alt="" className="reviews_comment-img"/> : null
          }

          <button className="reviews_comment-answer-button">
            Ответить
          </button>
        </div>
      </div>
    );
  };
};
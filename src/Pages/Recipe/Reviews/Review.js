import React from 'react';
import Avatar from './../../../assets/images/Reviews/avatar.png';
import { ReactComponent as Star } from '../../../assets/icons/Reviews/star.svg';

export class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={`user-review ${this.props.last ? 'user-review--last' : ''}`}>
        <img src={Avatar} alt="" className="user-review_avatar"/>
        <section className="user-review_wrap">
          
          <div className="user-review_header">
            <h3 className="user-review_user-name">
              {this.props.userName}
            </h3>
            <div className="user-review_publish-date">
              {this.props.publishDate}
            </div>
          </div>

          <div className="user-review_rate">
            <div className="user-review_stars-wrap">
              {Array(5).fill(0).map((item, index) => {
                if (index < this.props.rate) {
                  return <Star 
                    className='user-review_star user-review_star--active'
                    key={Math.random()}
                  />;
                }
                return <Star 
                  className='user-review_star'
                  key={Math.random()}
                />;
              })}
            </div>
            <div className="user-review_rate-count">
              {this.props.rate}
            </div>
          </div>

          <p className="user-review_comment">
            {this.props.comment} 
          </p>

          <a href="#" className="user-review_answer-button">
            <span className="user-review_answer-button-text">
              Ответить
            </span>
          </a>
        </section>
      </div>
    );
  };
};
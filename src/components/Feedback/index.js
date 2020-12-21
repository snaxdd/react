import React from 'react';
import {ReactComponent as IconClose} from './../../assets/icons/close.svg';
import AvatarImage from './../../assets/images/Cart/cart4.jpg';
import {ReactComponent as IconStar} from './../../assets/icons/Reviews/star.svg';
import {ReactComponent as IconLoad} from './../../assets/icons/Load.svg';
import { Button } from '../Button/index';

export class Feedback extends React.Component {
  render() {
    return (
      <div className="feedback">
        <span className="feedback_heading">
          Оставьте отзыв
        </span>
        <div className="feedback_wrap">
          <div className="feedback_left-wrap">
            <img src={AvatarImage} alt="user-avatar" className="feedback_avatar"/>
          </div>
          <div className="feedback_right-wrap">
            <form action="" className="feedback_form">
              <textarea className="feedback_textarea"/>
              <div className="feedback_rate">
                <span className="feedback_rate-text">
                  Оцените товар:
                </span>

                <div className="feedback_rate-stars">
                  {Array(5)
                    .fill(0)
                    .map(item => {
                      return <IconStar 
                      className="feedback_rate-star"
                      key={Math.random()}
                      />;
                    })
}
                </div>
              </div>
              <div className="feedback_load-file">
                <label className="feedback_load-label">
                  <IconLoad className="feedback_load-icon"/>
                  <span className="feedback_load-text">
                    Загрузить файл
                  </span>
                  <input type="file" name="file" className="feedback_load-input"/>
                </label>
              </div>
            </form>
          </div>
        </div>
        <IconClose 
          className="feedback_close"
          onClick={this.props.modalClose}
        />
        <Button text="Отправить" className="button--orange"/>
      </div>
    );
  };
};
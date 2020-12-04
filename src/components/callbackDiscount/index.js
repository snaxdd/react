import React from 'react';
import { ReactComponent as IconCallback } from './../../assets/icons/Callback.svg';
import { ReactComponent as IconOffer } from '../../assets/icons/Offer.svg';

export class CallbackDiscount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="callback-discount">
        <div className="callback-discount_wrap">
          <div className="callback-discount_container">
            <div className="callback-discount_title">
              Попробуй со скидкой
              <div className="callback-discount_offer">
                <span className="callback-discount_offer-percents">
                  -25%
                </span>
                <IconOffer />
              </div>
            </div>
            <div className="callback-discount_form">
              <IconCallback className="callback-discount_icon"/>
              <input 
                type="text" 
                className="callback-discount_phone"
                placeholder="Введите ваш телефон"
              />
              <a href="#" className="callback-discount_button">
                <span className="callback-discount_button-text">
                  Отправить
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
};
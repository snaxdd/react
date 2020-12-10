import React from 'react';
import { ReactComponent as IconCallback } from './../../assets/icons/Callback.svg';
import { ReactComponent as IconOffer } from '../../assets/icons/Offer.svg';

export class CallbackDiscount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth
    }
  }

  updatePlaceholder = () => {
    this.setState({
      screenWidth: window.innerWidth
    });
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.updatePlaceholder);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updatePlaceholder);
  }

  render() {
    return(
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
                placeholder={
                  this.state.screenWidth > 415 ? 'Введите ваш телефон' : 'Ваш телефон'
                }
              />
              <button 
                className="callback-discount_button">
                Отправить
              </button>
            </div>
          </div>
        </div>
    );
  };
};
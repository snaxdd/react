import React from 'react';
import { ReactComponent as CartIcon } from '../../assets/icons/Buttons/Cart.svg';

export class BuyButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <a href="#" className="buy-button">
        <CartIcon />
        <span className="buy-button_text">
          Купить
        </span>
      </a>
    );
  };
};
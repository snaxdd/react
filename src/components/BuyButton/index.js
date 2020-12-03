import React from 'react';
import { ReactComponent as CartIcon } from '../../assets/icons/Buttons/Cart.svg';

export class BuyButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <a href='#' className={`buy-button ${this.props.class ? this.props.class : ''}`}>
        <CartIcon 
          className="buy-button_icon"
        />
        <span className='buy-button_text'>
          {this.props.text}
        </span>
      </a>
    );
  };
};
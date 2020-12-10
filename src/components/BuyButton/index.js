import React from 'react';
import { ReactComponent as IconCart } from '../../assets/icons/Buttons/Cart.svg';

export class BuyButton extends React.Component {
  render() {
    return(
      <a href='/#' className={`buy-button ${this.props.class ? this.props.class : null}`}>
        <IconCart 
          className="buy-button_icon"
        />
        <span className='buy-button_text'>
          {this.props.text}
        </span>
      </a>
    );
  };
};
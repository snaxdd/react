import React from 'react';
import {ReactComponent as IconClose} from './../../assets/icons/close.svg';

export class CartItem extends React.Component {
  render() {
    return (
      <li className="cart_item">
          <div className="cart_left-wrap">
            <img
              src={this.props.data.image}
              alt={this.props.data.title}
              className="cart_image"/>
            <div className="cart_item-info">
              <span className="cart_item-heading">
                {this.props.data.title}
                <span className="cart_item-weight">
                  {'~' + this.props.data.weight}
                </span>
              </span>
              <span className="cart_item-count">
                {this.props.data.count + " шт."}
              </span>
            </div>
          </div>
          <div className="cart_right-wrap">
            <span className="cart_item-price">
              {this.props.data.price + " ₽"}
              <IconClose className="cart_item-close"/>
            </span>
          </div>
      </li>
    );
  };
};
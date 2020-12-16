import React from "react";
import { CartItem } from './CartItem';
import { Button } from './../Button/index';
import {ReactComponent as IconClose} from './../../assets/icons/close.svg';

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summ: 0
    }
  }

  summCompute = () => {
    let prevSumm = this.state.summ;

    this.props.data.map(item => {
      prevSumm += item.price;
    });

    this.setState({
      summ: prevSumm
    });
  }

  componentDidMount = () => {
    this.summCompute();
  }

  render() {
    return(
      <div className="cart">
        <span className="cart_heading">
          Корзина
        </span>
        <ul className="cart_list">
          {
            this.props.data.map(item => {
              return <CartItem data={item} key={Math.random()} />;
            })
          }
        </ul>
        <div className="cart_summ-wrap">
          <span className="cart_summ-heading">
            Итоговая сумма:
          </span>

          <span className="cart_summ">
            {
              this.state.summ + " ₽"
            }
          </span>
        </div>

        <Button text="Оформить заказ" className="button--orange"/>
        <IconClose 
          className="cart_close"
          onClick={() => this.props.modal({
            cart: false
          })}
        />
      </div>
    );
  };
};
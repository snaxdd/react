import React from 'react';
import { ReactComponent as BurgerIcon } from '../../assets/icons/Burger.svg';

export class Burger extends React.Component {
  render() {
    return (
      <div className="burger-menu header_burger-menu">
        <div className="burger-menu_icon">
          <BurgerIcon />
        </div>
        <span className="burger-menu_text">
          Каталог
        </span>
      </div>
    ); 
  };
}
import React from 'react';
import { ReactComponent as IconBurger } from '../../../assets/icons/Burger.svg';
import { ReactComponent as IconBurgerClose } from '../../../assets/icons/BurgerClose.svg';

export class Burger extends React.Component {
  render() {
    return (
      <div className='burger header_burger' 
      onClick={() => this.props.catalogHandle()}>
        {
          this.props.catalogIsOpen ? 
          <IconBurgerClose className="burger_icon"/> :
          <IconBurger className="burger_icon"/>
        }
        <span className='burger_text'>
          Каталог
        </span>
      </div>
    ); 
  };
}
import React from 'react';
import { ReactComponent as IconBurger } from '../../../assets/icons/Burger.svg';

export class Burger extends React.Component {
  render() {
    return (
      <div className='burger header_burger'>
        <IconBurger className="burger_icon"/>
        <span className='burger_text'>
          Каталог
        </span>
      </div>
    ); 
  };
}
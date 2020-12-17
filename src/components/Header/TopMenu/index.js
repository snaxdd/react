import React from 'react';
import { MenuItem } from './MenuItem';
import { ReactComponent as IconCallback } from '../../../assets/icons/Callback.svg';

export class TopMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className="container header_top-container">
        <nav className='header_menu'>
          <ul className='header_menu-list'>
            {this.props.menu.map(item => {
              return(
                <MenuItem 
                  href={item.href}
                  text={item.title} 
                  key={item.id}
                  dropDown={item.dropDown}
                  iconR={item.iconR}
                  iconL={item.iconL}
                />
              );
            })}
          </ul>
        </nav>
        <div className='header_contacts'>
        <ul className='header_contacts-list'>
          <li className='header_contacts-phone'>
            <a href='tel:123' className='header_contacts-phone-link'>
              {this.props.phone}
            </a>
          </li>
          <li className='header_contacts-callback'>
            <a href='/#' className='header_contacts-callback-link'>
              <IconCallback className="header_contacts-icon"/>
              Обратный звонок
            </a>
          </li>
        </ul>
      </div>
      </div>
    );
  };
}

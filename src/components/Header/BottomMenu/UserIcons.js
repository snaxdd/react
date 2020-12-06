import React from 'react';
import { ReactComponent as IconProfile } from '../../../assets/icons/Profile.svg';
import { ReactComponent as IconFav } from '../../../assets/icons/Fav.svg';
import { ReactComponent as IconCart } from '../../../assets/icons/Cart.svg';

export class UserIcons extends React.Component {
  render() {
    return (
      <div className='header_user-icons'>
        <div className='header_user-icons-item'>
          <a href='#' className='header_user-icons-link'>
            <IconProfile className='header_user-icons-profile'/>
          </a>
        </div>
        <div className='header_user-icons-item'>
          <a href='#' className='header_user-icons-link'>
            <IconFav />
          </a>
        </div>
        <div className='header_user-icons-item'>
          <a href='#' className='header_user-icons-link'>
            <IconCart />
          </a>
        </div>
      </div>
    );
  };
};
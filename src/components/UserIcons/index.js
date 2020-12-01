import React from 'react';
import { ReactComponent as Profile } from '../../assets/icons/Profile.svg';
import { ReactComponent as Fav } from '../../assets/icons/Fav.svg';
import { ReactComponent as Cart } from '../../assets/icons/Cart.svg';

export class UserIcons extends React.Component {
  render() {
    return (
      <div className='user-icons'>
        <div className='user-icons_item user-icons_profile'>
          <a href='#' className='user-icons_link'>
            <Profile />
          </a>
        </div>
        <div className='user-icons_item user-icons_favorite'>
          <a href='#' className='user-icons_link'>
            <Fav />
          </a>
        </div>
        <div className='user-icons_item user-icons_cart'>
          <a href='#' className='user-icons_link'>
            <Cart />
          </a>
        </div>
      </div>
    );
  };
};
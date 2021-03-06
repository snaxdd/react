import React from 'react';
import { ReactComponent as IconProfile } from '../../../assets/icons/Profile.svg';
import { ReactComponent as IconFav } from '../../../assets/icons/Fav.svg';
import { ReactComponent as IconCart } from '../../../assets/icons/Cart.svg';

export class UserIcons extends React.Component {
  render() {
    return (
      <div className='header_user-icons'>
        <div className='header_user-icons-item'>
          <button 
            onClick={this.props.showLoginModal}
            className='header_user-icons-button'>
            <IconProfile className='header_user-icons-svg'
            />
          </button>
        </div>
        <div className='header_user-icons-item'>
          <button className='header_user-icons-button'>
            <IconFav 
              className='header_user-icons-svg'
            />
          </button>
        </div>
        <div className='header_user-icons-item'>
          <button className='header_user-icons-button'>
            <IconCart 
              className='header_user-icons-svg'
              onClick={this.props.showCartModal}
            />
          </button>
        </div>
      </div>
    );
  };
};
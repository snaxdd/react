import React from 'react';
import { ReactComponent as IconProfile } from '../../../assets/icons/Profile.svg';
import { ReactComponent as IconFav } from '../../../assets/icons/Fav.svg';
import { ReactComponent as IconCart } from '../../../assets/icons/Cart.svg';

export class UserIcons extends React.Component {
  render() {
    return (
      <div className='header_user-icons'>
        <div className='header_user-icons-item'>
          <a href='/#' className='header_user-icons-link'>
            <IconProfile onClick={() => this.props.modal({
              login: true
            })}
              className='header_user-icons-svg'
            />
          </a>
        </div>
        <div className='header_user-icons-item'>
          <a href='/#' className='header_user-icons-link'>
            <IconFav 
              className='header_user-icons-svg'
            />
          </a>
        </div>
        <div className='header_user-icons-item'>
          <a href='/#' className='header_user-icons-link'>
            <IconCart 
              className='header_user-icons-svg'
              onClick={() => this.props.modal({
                cart: true
              })}
            />
          </a>
        </div>
      </div>
    );
  };
};
import React from 'react';
import { Logo } from '../../Logo/index';
import { ReactComponent as IconBurgerMobile } from '../../../assets/icons/Mobile/BurgerMobile.svg';
import { ReactComponent as IconSearchMobile } from '../../../assets/icons/Mobile/SearchMobile.svg';
import { ReactComponent as IconProfileMobile } from '../../../assets/icons/Mobile/ProfileMobile.svg';

export class HeaderMobile extends React.Component {
  render() {
    return(
      <div className="header_mobile-wrap">
        <Logo className="header_mobile-logo"/>
        <div className="header_mobile-icons-wrap">
          <a href="/#">
            <IconSearchMobile className="header_mobile-icon"/>
          </a>
          <a href="/#">
            <IconProfileMobile className="header_mobile-icon"/>
          </a>
          <a href="/#">
            <IconBurgerMobile className="header_mobile-icon"/>
          </a>
        </div>
      </div>
    );
  };
}
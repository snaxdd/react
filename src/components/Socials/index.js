import React from 'react';
import { ReactComponent as IconFacebook } from './../../assets/icons/Socials/Facebook.svg';
import { ReactComponent as IconInstagram } from './../../assets/icons/Socials/Instagram.svg';
import { ReactComponent as IconVK } from './../../assets/icons/Socials/VK.svg';
import { ReactComponent as IconYoutube } from './../../assets/icons/Socials/Youtube.svg';

export class Socials extends React.Component {
  render() {
    return(
      <div className="socials">
        <a 
          href="/#" 
          className="socials_link">
          <IconFacebook className="socials_logo"/>
        </a>
        <a 
          href="/#" 
          className="socials_link">
          <IconInstagram className="socials_logo"/>
        </a>
        <a 
          href="/#" 
          className="socials_link">
          <IconVK className="socials_logo"/>
        </a>
        <a 
          href="/#" 
          className="socials_link">
          <IconYoutube className="socials_logo"/>
        </a>
      </div>
    );
  };
};
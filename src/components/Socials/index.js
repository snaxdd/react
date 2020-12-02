import React from 'react';
import { ReactComponent as Facebook } from './../../assets/icons/Socials/Facebook.svg';
import { ReactComponent as Instagram } from './../../assets/icons/Socials/Instagram.svg';
import { ReactComponent as VK } from './../../assets/icons/Socials/VK.svg';
import { ReactComponent as Youtube } from './../../assets/icons/Socials/Youtube.svg';

export class Socials extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="socials">
        <a href="#" className="socials_link">
          <Facebook className="socials_logo"/>
        </a>
        <a href="#" className="socials_link">
          <Instagram className="socials_logo"/>
        </a>
        <a href="#" className="socials_link">
          <VK className="socials_logo"/>
        </a>
        <a href="#" className="socials_link">
          <Youtube className="socials_logo"/>
        </a>
      </div>
    );
  };
};
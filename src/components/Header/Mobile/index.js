import React from 'react';
import { Logo } from '../../Logo/index';

export class HeaderMobile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="header_mobile-wrap">
        <Logo class="header_mobile-logo"/>
      </div>
    );
  };
}
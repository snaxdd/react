import React from 'react';
import { ReactComponent as IconLogotype } from '../../assets/icons/Logo.svg';

export class Logo extends React.Component {
  render() {
    return (
      <a href="/#" className="logo_link">
        <IconLogotype className={this.props.className}/>
      </a>
    );
  };
};
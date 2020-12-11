import React from 'react';
import { ReactComponent as IconLogotype } from '../../assets/icons/Logo.svg';

export class Logo extends React.Component {
  render() {
    return (
      <a href="/#" className={this.props.className}>
        <IconLogotype/>
      </a>
    );
  };
};
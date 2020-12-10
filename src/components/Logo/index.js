import React from 'react';
import { ReactComponent as IconLogotype } from '../../assets/icons/Logo.svg';

export class Logo extends React.Component {
  render() {
    return (
      <a href="#">
        <IconLogotype className={this.props.class}/>
      </a>
    );
  };
};
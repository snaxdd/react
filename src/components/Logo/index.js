import React from 'react';
import { ReactComponent as IconLogotype } from '../../assets/icons/Logo.svg';

export class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <IconLogotype />
    );
  };
};
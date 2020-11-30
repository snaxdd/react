import React from 'react';
import { ReactComponent as Logotype } from '../../assets/icons/Logo.svg';

export class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Logotype />
    );
  };
};
import React from 'react';
import { Logo } from '../../Logo/index';
import { Burger } from './Burger';
import { SearchInput } from './SearchInput';
import { UserIcons } from './UserIcons';

export class BottomMenu extends React.Component {
  render() {
    return(
      <div className='container header_bottom-container'>
        <div className='logo header_logo'>
          <Logo />
        </div>
          <Burger />
          <SearchInput />
          <UserIcons />
      </div>
    );
  };
};
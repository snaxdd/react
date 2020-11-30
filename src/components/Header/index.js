import React from 'react';
import { TopMenu } from '../TopMenu/index';
import { TopContact } from '../TopContacts/index';
import { Logo } from '../Logo/index';
import { Burger } from '../Burger/index';
import { SearchInput } from '../SearchInput/index';
import { UserIcons } from '../UserIcons/index';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <header className="header">
        <div className="header-top">
          <div className="container header-top_container">
            <TopMenu menu={this.props.data.menu} />
            <TopContact phoneNumber={this.props.data.phoneNumber} />
          </div>
        </div>
        <div className="header-bottom">
          <div className="container header-bottom_container">
            <div className="logo header_logo">
              <Logo />
            </div>
            <Burger />
            <SearchInput />
            <UserIcons />
          </div>
        </div>
      </header>
    );
  };
};
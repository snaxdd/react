import React from 'react';
import { TopMenu } from './TopMenu/index';
import { BottomMenu } from './BottomMenu/index';
import { HeaderMobile } from './Mobile/index';
import { pageData } from './../../Pages/Recipe/constants/index';
import { topMenu } from './../../Pages/Recipe/constants/index';

export class Header extends React.Component {
  render() {
    return(
      <header className='header page_header'>
        <div className='header_top'>
          <TopMenu 
            menu={topMenu} 
            phone={pageData.header.phoneNumber} 
          />
        </div>
        <div className='header_bottom'>
          <BottomMenu />
        </div>
        <div className="header_mobile">
          <HeaderMobile />
        </div>
      </header>
    );
  };
};
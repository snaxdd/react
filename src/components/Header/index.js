import React from 'react';
import { TopMenu } from './TopMenu/index';
import { BottomMenu } from './BottomMenu/index';
import { HeaderMobile } from './Mobile/index';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <header className='header page_header'>
        <div className='header_top'>
          <TopMenu data={this.props.data} />
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
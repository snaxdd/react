import React from 'react';
import { TopMenu } from './TopMenu/index';
import { BottomMenu } from './BottomMenu/index';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <header className='header'>
        <div className='header_top'>
          <TopMenu data={this.props.data} />
        </div>
        <div className='header_bottom'>
          <BottomMenu />
        </div>
      </header>
    );
  };
};
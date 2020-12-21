import React from 'react';
import {TopMenu} from './TopMenu/index';
import {BottomMenu} from './BottomMenu/index';
import {HeaderMobile} from './Mobile/index';
import {pageData} from './../../Pages/Recipe/constants/index';
import {topMenu} from './../../Pages/Recipe/constants/index';
import {Catalog} from './Catalog/index';
import {catalog} from './../../Pages/Recipe/constants/index';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCatalog: false
    };
  }

  handleBurger = () => {
    const toggler = !this.state.showCatalog;

    this.setState({showCatalog: toggler});

    if (toggler) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  render() {
    return (
      <header className={`header page_header${this.state.showCatalog ? ' header--white' : ''}`}>
        <div className='header_top'>
          <TopMenu menu={topMenu} phone={pageData.header.phoneNumber}/>
        </div>
        <div className='header_bottom'>
          <BottomMenu 
            showCartModal={this.props.showCartModal}
            showLoginModal={this.props.showLoginModal} 
            openCatalog={this.handleBurger}
            catalogIsOpen={this.state.showCatalog}
          />
        </div>
        <div className="header_mobile">
          <HeaderMobile/>
        </div>
        <Catalog catalog={catalog} showCatalog={this.state.showCatalog} />
      </header>
    );
  };
};
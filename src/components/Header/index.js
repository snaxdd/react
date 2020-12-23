import React from 'react';
import { TopMenu } from './TopMenu/index';
import { BottomMenu } from './BottomMenu/index';
import { HeaderMobile } from './Mobile/index';
import { pageData } from './../../Pages/Recipe/constants/index';
import { Catalog } from './Catalog/index';
import { catalog } from './../../Pages/Recipe/constants/index';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catalogIsOpen: false,
    };
  }

  catalogHandle = () => {
    this.setState((state) => ({
      catalogIsOpen: !state.catalogIsOpen,
    }));

    if (!this.state.catalogIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  componentDidMount() {
    document.body.addEventListener('click', (e) => {
      const target = e.target;

      if (target.classList.contains('catalog--open')) {
        this.setState((state) => ({
          catalogIsOpen: !state.catalogIsOpen,
        }));
      }
    });

    document.body.addEventListener('keydown', (e) => {
      const key = e.code;

      if (key.toLowerCase() === 'escape' && this.state.catalogIsOpen) {
        this.setState((state) => ({
          catalogIsOpen: !state.catalogIsOpen,
        }));
      }
    });
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', (e) => {});
  }

  render() {
    return (
      <header
        className={`header page_header${
          this.state.catalogIsOpen ? ' header--white' : ''
        }`}
      >
        <div className='header_top'>
          <TopMenu phone={pageData.header.phoneNumber} />
        </div>
        <div className='header_bottom'>
          <BottomMenu
            showCartModal={this.props.showCartModal}
            showLoginModal={this.props.showLoginModal}
            catalogHandle={this.catalogHandle}
            catalogIsOpen={this.state.catalogIsOpen}
          />
        </div>
        <div className='header_mobile'>
          <HeaderMobile />
        </div>
        <Catalog catalog={catalog} showCatalog={this.state.catalogIsOpen} />
      </header>
    );
  }
}

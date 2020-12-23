import React from 'react';
import { Menu } from './Menu';
import { ReactComponent as IconCallback } from '../../../assets/icons/Callback.svg';
import { topMenu } from './../../../Pages/Recipe/constants/index';

export class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDropdown: '',
    };
  }

  handleDropdown = (value) => {
    this.setState({
      activeDropdown: value,
    });
  };

  componentDidMount() {
    document.body.addEventListener('click', (e) => {
      const target = e.target;

      if (!target.closest('.header_menu-list')) {
        this.setState({
          activeDropdown: '',
        });
      }
    });
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', (e) => {});
  }

  render() {
    return (
      <div className='container header_top-container'>
        <nav className='header_menu'>
          <Menu
            menu={topMenu}
            activeDropdown={this.state.activeDropdown}
            handleDropdown={this.handleDropdown}
          />
        </nav>
        <div className='header_contacts'>
          <ul className='header_contacts-list'>
            <li className='header_contacts-phone'>
              <a href='tel:123' className='header_contacts-phone-link'>
                {this.props.phone}
              </a>
            </li>
            <li className='header_contacts-callback'>
              <a href='/#' className='header_contacts-callback-link'>
                <IconCallback className='header_contacts-icon' />
                Обратный звонок
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

import React from 'react';
import { Menu } from './Menu';
import { ReactComponent as IconCallback } from '../../../assets/icons/Callback.svg';

export class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDropown: '',
    };
  }

  handleDropdown = (value) => {
    this.setState({activeDropown: value});
  }

  componentDidMount() {
    document.body.addEventListener('click', e => {
      let target = e.target;

      console.log('target :>> ', target);
    });
  }

  render() {
    return(
      <div className="container header_top-container">
        <nav className='header_menu'>
          <Menu 
            menu={this.props.menu}
            activeDropown={this.state.activeDropown}
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
              <IconCallback className="header_contacts-icon"/>
              Обратный звонок
            </a>
          </li>
        </ul>
      </div>
      </div>
    );
  };
}

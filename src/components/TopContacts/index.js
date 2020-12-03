import React from 'react';
import { ReactComponent as CallbackIcon } from '../../assets/icons/Callback.svg';

export class TopContact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='top-contacts'>
        <ul className='top-contacts_list'>
          <li className='top-contacts_phone'>
            <a href='tel:123' className='top-contacts_phone-link'>
              {this.props.phoneNumber}
            </a>
          </li>
          <li className='top-contacts_callback'>
            <CallbackIcon className="top-contacts_icon"/>
            <a href='#' className='top-contacts_callback-link'>
              Обратный звонок
            </a>
          </li>
        </ul>
      </div>
    );
  };
};
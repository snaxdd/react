import React from 'react';
import { ReactComponent as IconFavWhite } from '../../assets/icons/FavWhite.svg';
import { ReactComponent as IconPrintWhite } from '../../assets/icons/PrintWhite.svg';
import { ReactComponent as IconShareWhite } from '../../assets/icons/ShareWhite.svg';

export class UserActionIcons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='slider_user-actions'>
        <div className='slider_user-actions-icon'>
          <a href='#' className='slider_user-actions-link'>
            <IconFavWhite className='slider_user-actions-svg slider_user-actions-svg--favorite'/>
          </a>
        </div>
        <div className='slider_user-actions-icon'>
          <a href='#' className='slider_user-actions-link'>
            <IconPrintWhite className='slider_user-actions-svg'/>
          </a>
        </div>
        <div className='slider_user-actions-icon'>
          <a href='#' className='slider_user-actions-link'>
            <IconShareWhite className='slider_user-actions-svg'/>
          </a>
        </div>
      </div>
    );
  };
};
import React from 'react';
import {ReactComponent as IconSearch} from '../../../assets/icons/Search.svg';

export class
SearchInput extends React.Component {
  render() {
    return (
      <div className='header_search'>
        <IconSearch className='header_search-icon'/>

        <input
          className='header_search-input'
          type='text'
          placeholder='Название рыбы или морепродукта'/>
      </div>
    );
  };
};
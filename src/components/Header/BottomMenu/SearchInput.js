import React from 'react';
import { ReactComponent as IconSearch } from '../../../assets/icons/Search.svg';

export class 
  SearchInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='header_search'>
        <div className='header_search-icon'>
          <IconSearch />
        </div>
        <input 
          className='header_search-input' 
          type='text' 
          placeholder='Название рыбы или морепродукта'
        />
      </div>
    );
  };
};
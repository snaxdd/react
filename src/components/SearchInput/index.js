import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/Search.svg';

export class SearchInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-input header_search-input">
        <div className="search-input_icon">
          <SearchIcon />
        </div>
        <input className="search-input_textfield" type="text" placeholder="Название рыбы или морепродукта"/>
      </div>
    );
  };
};
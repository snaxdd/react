import React from 'react';
import {DropDownItem} from './DropDownItem';

export class DropDown extends React.Component {
  render() {
    return (
      <ul className={`header_menu-dropdown ${this.props.open ? 'header_menu-dropdown--open' : null}`}>
        {this
          .props
          .dropDown
          .map((item, index) => {
            return (<DropDownItem 
              key={item.id} 
              text={item.text} 
              href={item.href}/>)
          })
}
      </ul>
    );
  };
};
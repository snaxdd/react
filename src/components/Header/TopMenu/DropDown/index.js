import React from 'react';
import {DropDownItem} from './DropDownItem';

export class DropDown extends React.Component {
  render() {
    return (
      <ul className="header_menu-dropdown">
        {this
          .props
          .dropDown
          .map((item, index) => {
            return (<DropDownItem key={item.id} text={item.text} href={item.href}/>)
          })
}
      </ul>
    );
  };
};
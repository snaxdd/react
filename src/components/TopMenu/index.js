import React from 'react';
import { MenuItem } from './MenuItem';

export class TopMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav className='top-menu'>
        <ul className='top-menu_list'>
          {this.props.menu.map(item => {
            return(
              <MenuItem 
                text={item.text} 
                iconLeft={item.iconLeft}
                iconRight={item.iconRight}
                key={ item + Math.random() }
              />
            );
          })}
        </ul>
      </nav>
    );
  };
}

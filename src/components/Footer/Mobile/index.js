import React from 'react';
import { MenuItem } from './MenuItem';

export class FooterMobile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <footer className="footer-mobile">
        <h2 className="footer-mobile_heading">
          Интернет-магазин fish2o
        </h2>
        <nav className="footer-mobile_menu">
          <ul className="footer-mobile_list">
            {
              this.props.data.map(item => {
                return(
                  <MenuItem 
                  key={item.id}
                  title={item.title}
                  innerLinks={item.links}
                  />
                )
              })
            }
          </ul>
        </nav>
        <div className="footer-mobile_contacts">
          <ul className="footer-mobile_contacts-list">
            
          </ul>
        </div>
      </footer>
    );
  };
};
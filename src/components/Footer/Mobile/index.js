import React from 'react';
import { MenuItem } from './MenuItem';
import {ReactComponent as IconMobile} from './../../../assets/icons/Callback.svg';
import {ReactComponent as IconLocation} from './../../../assets/icons/Location.svg';
import {ReactComponent as IconPyrobyte} from './../../../assets/icons/pyrobyte.svg';

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
          <ul className="footer-mobile_menu-list">
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
            <li className="footer-mobile_contacts-item footer-mobile_contacts-phone">
              <IconMobile className="footer-mobile_contacts-icon"/>
              <a 
                href="#" 
                className="footer-mobile_contacts-link footer-mobile_contacts-link-phone"
              >
                +7 (495) 445-05-50
              </a>
            </li>
            <li className="footer-mobile_contacts-item">
              <IconLocation 
                className="footer-mobile_contacts-icon footer-mobile_contacts-icon-location"
              />
              <a href="#" className="footer-mobile_contacts-link">
                Химки, ул. Заводская, 20
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-mobile_pyrobyte">
          <IconPyrobyte />
        </div>

        <span className="footer-mobile_copyright">
          © 2020 Fish2O. Все права защищены
        </span>

        <ul className="footer-mobile_documents">
          <li className="footer-mobile_documents-item">
            <a href="#" className="footer-mobile_documents-link">
              Политика конфиденциальности
            </a>
          </li>
          <li className="footer-mobile_documents-item">
            <a href="#" className="footer-mobile_documents-link">
              Договор оферты
            </a>
          </li>
        </ul>
      </footer>
    );
  };
};
import React from 'react';
import { Logo } from '../Logo/index';
import { Socials } from '../Socials/index';
import { ReactComponent as IconCallback } from '../../assets/icons/Callback.svg';
import { ReactComponent as IconMail } from '../../assets/icons/mail.svg';
import { ReactComponent as IconPyrobyte } from '../../assets/icons/pyrobyte.svg';
import { Button } from '../Button/index';
import { MenuItem } from './MenuItem';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <footer className="footer">
        <div className="container">
          <div className="footer_top">

            <div className="footer_socials-wrap">
              <Logo/>

              <Socials />
            </div>

            <div className="footer_menu">
              <span className="footer_menu-heading footer_heading">
                Интернет-магазин fish2o
              </span>

              <ul className="footer_menu-list">
                {this.props.data.menu.map(item => {
                  return(
                    <MenuItem 
                      key={item.id} 
                      href={item.href}
                      text={item.text}
                    />
                  );
                })}
              </ul>
            </div>

            <div className="footer_contacts">
              <span className="footer_heading footer_contacts-heading">
                Свяжитесь с нами
              </span>

              <ul className="footer_contacts-list">
                <li className="footer_contacts-item">
                  <IconCallback className="footer_contacts-icon"/>
                  <a href="#" className="footer_contacts-link footer_contacts-phone">+7 (495) 445-05-50</a>
                </li>
                <li className="footer_contacts-item">
                  <IconMail className="footer_contacts-icon footer_contacts-icon--email"/>
                  <a href="#" className="footer_contacts-link">info@fish2o.ru</a>
                </li>
              </ul>

              <Button 
                text="Обратная связь"
                className="footer_callback-btn"
              />
            </div>
          </div>

          <div className="footer_bottom">
            <div className="footer_bottom-left">
              <span className="footer_copyright">
                © 2020 Fish2O. Все права защищены
              </span>
              <div className="footer_pyrobyte">
                <IconPyrobyte className="footer_pyrobyte-logo"/>
                <span className="footer_pyrobyte-text">
                  Дизайн сайта
                </span>
              </div>
            </div>
            <div className="footer_bottom-right">
              <ul className="footer_documents">
                <li className="footer_documents-item">
                  <a href="#" className="footer_documents-link">
                    Политика конфиденциальности
                  </a>
                </li>
                <li className="footer_documents-item">
                  <a href="#" className="footer_documents-link">
                    Договор оферты
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
};
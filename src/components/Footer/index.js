import React from 'react';
import { Logo } from '../Logo/index';
import { Socials } from '../Socials/index';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <footer className="footer">
        <div className="container">
          <div className="footer-top">

            <div className="footer-logo-socials-wrap">
              <Logo/>

              <Socials />
            </div>

            <div className="footer-menu">
              <span className="footer-menu_footer-heading footer-heading">
                Интернет-магазин fish2o
              </span>

              <ul className="footer-menu_list">
                <li className="footer-menu_item">
                  <a href="#" className="footer-menu_link">Весь ассортимент</a>
                </li>
                <li className="footer-menu_item">
                  <a href="#" className="footer-menu_link">Наши магазины</a>
                </li>
                <li className="footer-menu_item">
                  <a href="#" className="footer-menu_link">О нас</a>
                </li>
                <li className="footer-menu_item">
                  <a href="#" className="footer-menu_link">Программа лояльности</a>
                </li>
                <li className="footer-menu_item">
                  <a href="#" className="footer-menu_link">Оплата</a>
                </li>
                <li className="footer-menu_item">
                  <a href="#" className="footer-menu_link">Гарантии и возврат</a>
                </li>
                <li className="footer-menu_item">
                  <a href="#" className="footer-menu_link">Условия доставки</a>
                </li>
                <li className="footer-menu_item">
                  <a href="#" className="footer-menu_link">Отзывы</a>
                </li>
                <li className="footer-menu_item">
                  <a href="#" className="footer-menu_link">Отзывы</a>
                </li>
              </ul>
            </div>

            <div className="footer-contacts">
              <span className="footer-heading">
                Свяжитесь с нами
              </span>

              <ul className="footer-contacts_list">
                <li className="footer-contacts_item">
                  <a href="#" className="footer-contacts_link footer-contacts_phone">+7 (495) 445-05-50</a>
                </li>
                <li className="footer-contacts_item">
                  <a href="#" className="footer-contacts_link">info@fish2o.ru</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
};
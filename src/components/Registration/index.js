import React from 'react';
import {ReactComponent as IconClose} from './../../assets/icons/close.svg';
import {ReactComponent as IconProfile} from './../../assets/icons/Registration/Profile.svg';
import {ReactComponent as IconMail} from './../../assets/icons/Registration/Mail.svg';
import {ReactComponent as IconPhone} from './../../assets/icons/Registration/Phone.svg';
import {ReactComponent as IconView} from './../../assets/icons/Registration/View.svg';
import {Button} from './../../components/Button/index';

export class Registration extends React.Component {
  render() {
    return (
      <div className="registration">
        <span className="registration_heading">
          Регистрация
        </span>

        <form action="" className="registration_form">
          <div className="registration_input-wrap">
            <div className="input registration_input">
              <input type="text" className="input_field" placeholder="Логин"/>
              <IconProfile className="registration_input-icon"/>
            </div>
            <div className="input registration_input">
              <input type="email" className="input_field" placeholder="Email"/>
              <IconMail className="registration_input-icon registration_input--stroke"/>
            </div>
            <div className="input registration_input">
              <input type="tel" className="input_field" placeholder="Телефон"/>
              <IconPhone className="registration_input-icon"/>
            </div>
            <div className="input registration_input">
              <input type="password" className="input_field" placeholder="Пароль"/>
              <IconView className="registration_input-icon"/>
            </div>
            <div className="input registration_input">
              <input type="password" className="input_field" placeholder="Повторите пароль"/>
              <IconView className="registration_input-icon"/>
            </div>
          </div>

          <Button text="Регистрация" className="button--orange registration_reg-button"/>
          <Button text="Вход на сайт" className="registration_login-btn"/>

          <div className="registration_privacy-wrap">
            <span className="registration_privacy-policy">
              Нажимая кнопку, вы соглашаетесь с нашей
              <br/>
              <a href="/#" className="registration_privacy-link">
                политикой конфиденциальности
              </a>
            </span>
          </div>
        </form>
        <IconClose className="registration_close"/>
      </div>
    );
  };
};
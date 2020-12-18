import React from "react";
import {ReactComponent as IconPhone} from '../../assets/icons/Registration/Phone.svg';
import {ReactComponent as IconView} from '../../assets/icons/Registration/View.svg';
import {Button} from "../Button/index";
import {ReactComponent as IconClose} from './../../assets/icons/close.svg';

export class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <span className="login_heading">
          Вход в личный кабинет
        </span>

        <form action="" className="login_form">
          <div className="login_inputs-wrap">
            <div className="input login_input">
              <input type="text" className="input_field" placeholder="Телефон"/>
              <IconPhone className="login_input-icon"/>
            </div>
            <div className="input login_input">
              <input type="password" className="input_field" placeholder="Пароль"/>
              <IconView className="login_input-icon"/>
            </div>
          </div>
          <div className="login_options-wrap">
            <div className="login_remember">
              <label className="login_remember-label">
                <input type="checkbox" className="checkbox login_checkbox"/>
                Запомнить меня
              </label>
            </div>
            <div className="login_lost-password-wrap">
              <a href="/#" className="login_lost-password">
                Забыли пароль?
              </a>
            </div>
          </div>
          <Button text="Войти" className="button--orange login_login-btn"/>
          <Button text="Регистрация" className="login_register-btn"/>
        </form>

        <div className="login_privacy-wrap">
          <span className="login_privacy-policy">
            Нажимая кнопку, вы соглашаетесь с нашей
            <br/>
            <a href="/#" className="login_privacy-link">
              политикой конфиденциальности
            </a>
          </span>
        </div>
        <IconClose className="login_close" onClick={this.props.modalClose}/>
      </div>
    );
  };
};
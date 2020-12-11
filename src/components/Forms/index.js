import React from 'react';
import {ReactComponent as IconAlert} from '../../assets/icons/Forms/IconAlert.svg';

export class Forms extends React.Component {
  render() {
    return (
      <div className="forms">
        <div className="container forms_container">

          <div className="forms_preview">
            <span className="forms_preview-heading">
              Disable
            </span>

            <div className="input">
              <input
                disabled
                placeholder="Введите название"
                type="text"
                className="input_field"/>
            </div>
          </div>

          <div className="forms_preview">
            <span className="forms_preview-heading">
              Default
            </span>

            <div className="input">
              <input placeholder="Введите название" type="text" className="input_field"/>
            </div>
          </div>

          <div className="forms_preview">
            <span className="forms_preview-heading">
              Hover
            </span>

            <div className="input">
              <input placeholder="Введите название" type="text" className="input_field"/>
            </div>
          </div>

          <div className="forms_preview">
            <span className="forms_preview-heading">
              Focus
            </span>

            <div className="input">
              <input placeholder="Введите название" type="text" className="input_field"/>
            </div>
          </div>

          <div className="forms_preview">
            <span className="forms_preview-heading">
              Alert
            </span>

            <div className="input">
              <input
                placeholder="Введите название"
                type="text"
                className="input_field input_field--alert"/>

              <span className="input_message">
                Сообщение об ошибке
              </span>
            </div>
          </div>

          <div className="forms_preview">
            <span className="forms_preview-heading">
              Alert 2
            </span>

            <div className="input">
              <div className="input_message-box">
                <span className="input_message">
                  Сообщение об ошибке
                </span>
              </div>
              <input
                placeholder="Введите название"
                type="text"
                className="input_field input_field--alert2"/>
              <IconAlert className="input_icon-alert"/>
            </div>
          </div>

        </div>
      </div>
    );
  };
};
import React from 'react';
import { Button } from '../Button/index';

export class AskQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="ask-question main_ask-question">
        <span className="ask-question_heading">
          Не знаете с чего начать ?
        </span>
        <p className="ask-question_text">
          Всегда можете написать нам <br /> 
          и мы с радостью ответим <br /> 
          на все вопросы!
        </p>
        <Button 
          text="Задать вопрос"
          href="#"
          className="ask-question_button"
        />
      </div>
    )
  }
}
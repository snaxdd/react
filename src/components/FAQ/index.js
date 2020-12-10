import React from 'react';
import { Question } from './Question';

export class Faq extends React.Component {
  render() {
    return(
      <section className="faq main_faq">
        <h2 className="faq_heading">
          Частые вопросы
        </h2>

        <ul className="faq_list">
          {
            this.props.data.map(item => {
              return(
                <Question 
                key={item.id}
                title={item.title}
              />
              )
            })
          }
        </ul>
      </section>
    );
  };
};
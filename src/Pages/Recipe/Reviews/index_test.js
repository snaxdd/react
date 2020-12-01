import React from 'react';
import {ReactComponent as IconRate} from '../../../assets/icons/Timer'

function Reviews({data = []}) {
  return (
    <>
    <Review name='Виктор Рыбин' date='03.11.2020' />
    <Review name='Виктор Рыбин' date='03.11.2020' />
    <Review name='Виктор Рыбин' date='03.11.2020' />
    </>
    )
}

function Review({name = '', date = '', rate = '', avatar = '', text = ''}) {
  return (
    <div className="review">
      <img src={require('../../../assets/images')} alt="" srcset=""/>
      <div className="review_header">
        <div className="review_name">{name}</div>
        <div className="reivew_date">{date}</div>
      </div>
      {Array(5).fill(0).map(_, indexItem => (
        <div className="review_rate">
          <IconRate className={`review_iconrate ${indexItem <= rate ? 'review_iconrate--fill' : ''}`} />
        </div>    
      ))}
      <span className="review_text">{text}</span>
      <button className="review_answer">Ответить</button>  
    </div>
  )
}
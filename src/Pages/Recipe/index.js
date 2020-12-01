import React from 'react';
import { Header } from './../../components/Header/index';
import { Breadcrumbs } from './../../components/Breadcrumbs/index';
import { Slider } from './../../components/Slider/index';
import { ContentVideos } from './../../components/ContentVideos/index';
import { ContentDescription } from './../../components/ContentDescription/index';
import { NutritionalValue } from '../../components/NutritionalValue/index';
import Image from './../../assets/images/image.jpg';

export class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className='app'>
        <Header data={pageData.header} />
        <main className='main'>
  
          <div className='breadcrumbs'>
            <div className='container breadcrumbs_container'>
              <Breadcrumbs breadcrumbs={pageData.breadcrumbs} />
            </div>
          </div>
  
          <div className='slider-top'>
            <div className='container slider-top_container'>
              <Slider sliderData={pageData.topSlider}/>
            </div>
          </div>

          <div className='content'>
            <div className='container content_container'>
              <div className="content-left-wrap">
                <ContentVideos data={pageData.content.contentVideos}/>
              </div>
              <div className="content-right-wrap">
                <ContentDescription />
                <NutritionalValue />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };
};

const pageData = {
  breadcrumbs: [
    'Главная',
    'Рецепты'
  ],
  header: {
    menu: [
      'Кто мы', 
      'Доставка и оплата', 
      'Наши магазины', 
      'Покупателям', 
      'Новости'
    ],
    phoneNumber: '+7 (495) 445-05-50'
  },
  topSlider: [
    {
      title: 'Семга, запеченная в духовке',
      image: Image,
      id: 1,
      properties: {
        complexity: 'Средняя',
        timer: '10 мин',
        kkal: '387 ккал'
      }
    },
    {
      title: 'Селедка под шубой',
      image: Image,
      id: 2,
      properties: {
        complexity: 'Низкая',
        timer: '7 мин',
        kkal: '213 ккал'
      }
    }
  ],
  content: {
    contentVideos: [
      {
        id: 1,
        title: 'Video1',
        url: 'https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=ChilledCow'
      },
      {
        id: 2,
        title: 'Video2',
        url: 'https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=ChilledCow'
      },
      {
        id: 3,
        title: 'Video3',
        url: 'https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=ChilledCow'
      }
    ]
  }
}
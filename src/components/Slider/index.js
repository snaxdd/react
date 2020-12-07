import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import { SliderItem } from './SliderItem';
import { ReactComponent as IconSliderArrowNext } from '../../assets/icons/Slider/next-arrow.svg';
import { ReactComponent as IconSliderArrowPrev } from '../../assets/icons/Slider/prev-arrow.svg';

SwiperCore.use([
  Navigation,
  Pagination
]);

export class Slider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='slider'>
        <Swiper
        breakpoints={{
          415: {
            spaceBetween: 20
          }
        }}
        pagination={{
          el: '.slider_pagination',
          clickable: true,
          renderBullet: function(index, className) {
            return '<span class="' + className + '"></span>'; 
          }
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{nextEl: '.slider_button-next',
          prevEl: '.slider_button-prev'}}
        >
        {
          this.props.sliderData.map(item => {
            return(
              <SwiperSlide key={ item.id }>
                <SliderItem slideData={ item }/>
              </SwiperSlide>
            );
          })
        }  
        </Swiper>
        <div className='slider_button slider_button-next'>
          <IconSliderArrowNext />
        </div> 
        <div className='slider_button slider_button-prev'>
          <IconSliderArrowPrev />
        </div> 
        <div className="slider_pagination">

        </div>
      </div>
    );
  };
};


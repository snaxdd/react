import React from 'react';
import { RecipeCard } from './RecipeCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import { ReactComponent as IconControlArrow } from '../../../assets/icons/Slider/control-arrow.svg';

SwiperCore.use([
  Navigation,
  Pagination
]);

export class SimilarRecipes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="similar-recipes_carousel">
        <Swiper
        breakpoints={{
          1160: {
            slidesPerView: 4,
            centeredSlides: false
          }
        }}
        className={'similar-recipes_slider'}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function(index, className) {
            return '<span class="' + className + '"></span>'; 
          }
        }}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{nextEl: '.similar-recipes_carousel-next',
          prevEl: '.similar-recipes_carousel-prev'}}
        >
        {
          this.props.recipesData.map(item => {
            return(
              <SwiperSlide
              className='similar-recipes_card-wrap'
                key={item.id}>
                <RecipeCard 
                  title={item.title}
                  text={item.text}
                  rate={item.rate}
                  reviewsCount={item.reviewsCount}
                  cookingTime={item.cookingTime}
                  calories={item.calories}
                  titleLink='#'
                  imageLink='#'
                />
              </SwiperSlide>
            );
          })
        }  
        </Swiper>
        <div className="similar-recipes_carousel-controls">
          <div className="similar-recipes_carousel-button">
            <IconControlArrow 
              className="similar-recipes_carousel-icon similar-recipes_carousel-prev"
            />
          </div>
          <div className="similar-recipes_carousel-button">
            <IconControlArrow 
              className="similar-recipes_carousel-icon similar-recipes_carousel-next"
            />
          </div>
        </div>
        <div className="swiper-pagination">

        </div>
      </div>
    );
  };
};
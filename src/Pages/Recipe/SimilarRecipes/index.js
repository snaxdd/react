import React from 'react';
import { RecipeCard } from './RecipeCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
//import 'swiper/swiper.scss';
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
        loop={true}
        breakpoints={{
          1160: {
            slidesPerView: 4,
            centeredSlides: false
          }
        }}
        className={'similar-recipes_slider'}
        pagination={{
          el: '.similar-recipes_pagination',
          clickable: true,
          renderBullet: function(index, className) {
            return '<span class="' + className + '"></span>'; 
          },
          bulletClass: 'similar-recipes_pagination-bullet',
          bulletActiveClass: 'similar-recipes_pagination-bullet--active'
        }}
        spaceBetween={40}
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
          <div className="similar-recipes_carousel-button similar-recipes_carousel-prev">
            <IconControlArrow 
              className="similar-recipes_carousel-icon"
            />
          </div>
          <div className="similar-recipes_carousel-button similar-recipes_carousel-next">
            <IconControlArrow 
              className="similar-recipes_carousel-icon"
            />
          </div>
        </div>
        <div className="similar-recipes_pagination">

        </div>
      </div>
    );
  };
};
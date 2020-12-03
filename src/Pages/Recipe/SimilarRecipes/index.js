import React from 'react';
import { RecipeCard } from './RecipeCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';

SwiperCore.use([
  Navigation
]);

export class SimilarRecipes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="similar-recipes-carousel">
        <Swiper
        spaceBetween={40}
        slidesPerView={4}
        navigation={{nextEl: '.similar-recipes-carousel_next',
          prevEl: '.similar-recipes-carousel_prev'}}
        >
        {
          this.props.recipesData.map(item => {
            return(
              <SwiperSlide key={item.id}>
                <RecipeCard 
                  title={item.title}
                  text={item.text}
                  rate={item.rate}
                  reviewsCount={item.reviewsCount}
                  cookingTime={item.cookingTime}
                  calories={item.calories}
                />
              </SwiperSlide>
            );
          })
        }  
        </Swiper>
        <div className="similar-recipes-carousel_controls">
          <div className="similar-recipes-carousel_button similar-recipes-carousel_prev"></div>
          <div className="similar-recipes-carousel_button similar-recipes-carousel_next"></div>
        </div>
      </div>
    );
  };
};
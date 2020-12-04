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
      <div className="similar-recipes_carousel">
        <Swiper
        spaceBetween={40}
        slidesPerView={4}
        navigation={{nextEl: '.similar-recipes_carousel-next',
          prevEl: '.similar-recipes_carousel-prev'}}
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
        <div className="similar-recipes_carousel-controls">
          <div className="similar-recipes_carousel-button similar-recipes_carousel-prev"></div>
          <div className="similar-recipes_carousel-button similar-recipes_carousel-next"></div>
        </div>
      </div>
    );
  };
};
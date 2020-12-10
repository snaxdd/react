import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination} from "swiper";
import "swiper/swiper.scss";
import {ReactComponent as IconArrow} from "../../assets/icons/Slider/control-arrow.svg";
import { UserActionIcons } from "./UserActionIcons";
import { SliderRecipeInfo } from "./SliderRecipeInfo";

SwiperCore.use([Navigation, Pagination]);

export class PromoSlider extends React.Component {
  render() {
    return (
      <div className="promo-slider_wrap">
        <UserActionIcons href="#"/>
        <SliderRecipeInfo
          title={this.props.sliderData.title} 
          complexity={this.props.sliderData.properties.complexity} 
          timer={this.props.sliderData.properties.timer} 
          kkal={this.props.sliderData.properties.kkal}/>
        <Swiper
          className={'promo-slider_screen'}
          breakpoints={{
          415: {
            spaceBetween: 20,
            slidesPerView: 1
          }
        }}
          pagination={{
          el: ".promo-slider_pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          },
          bulletClass: "promo-slider_pagination-bullet",
          bulletActiveClass: "promo-slider_pagination-bullet--active"
        }}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
          nextEl: ".promo-slider_button-next",
          prevEl: ".promo-slider_button-prev"
        }}>
          {this
            .props
            .sliderData
            .images
            .map(item => {
              return (
                <SwiperSlide 
                className="promo-slider_slide-wrap"
                key={Math.random()}>
                  <img src={item} alt="some" className="promo-slider_image"/>
                </SwiperSlide>
              );
            })
}
        </Swiper>
        <div className="promo-slider_button promo-slider_button-next">
          <IconArrow/>
        </div>
        <div className="promo-slider_button promo-slider_button-prev">
          <IconArrow/>
        </div>
        <div className="promo-slider_pagination"></div>
      </div>
    );
  };
};

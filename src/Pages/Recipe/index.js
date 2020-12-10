import React from 'react';
import { Header } from './../../components/Header/index';
import { Breadcrumbs } from './../../components/Breadcrumbs/index';
import { PromoSlider } from '../../components/PromoSlider/index';
import { RecipeVideos } from './../../components/RecipeVideos/index';
import { RecipeDescription } from './RecipeDescription';
import { NutritionalValue } from '../../components/NutritionalValue/index';
import { Ingredients } from '../../components/Ingredients/index';
import { IngredientsMobile } from '../../components/Ingredients/IngredientsMobile';
import { RecipeSteps } from '../../components/RecipeSteps/index';
import { Reviews } from './Reviews/index';
import { SimilarRecipes } from './SimilarRecipes/index';
import { CallbackDiscount } from '../../components/CallbackDiscount/index';
import { Footer } from '../../components/Footer/index';
import { Faq } from '../../components/FAQ/index';
import { AskQuestion } from '../../components/AskQuestion/index';
import { FooterMobile } from '../../components/Footer/Mobile/index';
import { pageData } from './constants/index';

//TopMenu Icons
import { ReactComponent as IconDelivery } from '../../assets/icons/Delivery.svg';
import { ReactComponent as IconMenuArrowDown } from '../../assets/icons/Menu-arrow-down.svg';

//Nutritional Value Icons
import { ReactComponent as IconMeat } from './../../assets/icons/NutritionalValue/Meat.svg';
import { ReactComponent as IconPizza } from './../../assets/icons/NutritionalValue/Pizza.svg';
import { ReactComponent as IconRice } from './../../assets/icons/NutritionalValue/Rice.svg';
import { ReactComponent as IconCalories } from './../../assets/icons/NutritionalValue/Calories.svg';

//Images
import Image from './../../assets/images/image.jpg';
import CommentImage from './../../assets/images/Reviews/comment-image.jpg';

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
  
          <section className="recipe main_recipe">
            <div className='promo-slider recipe_promo-slider'>
              <div className='container promo-slider_container'>
                <PromoSlider sliderData={pageData.promoSlider}/>
              </div>
            </div>

            <div className='container recipe_container'>
              <div className="recipe_left">
                <RecipeVideos data={pageData.content.contentVideos}/>
                <Ingredients data={pageData.ingredients}/>
              </div>
              <div className="recipe_right">
                <RecipeDescription />
                <IngredientsMobile data={pageData.ingredients}/>
                <NutritionalValue data={pageData.nutritionalValue}/>
                <div className="recipe_steps-wrap">
                  <RecipeSteps recipeSteps={pageData.recipeSteps}/>
                </div>
              </div>
            </div>
          </section>

          <section className="reviews main_reviews">
            <div className="container">
              <h2 className="section_heading reviews_heading--pc">
                Отзывы о рецепте
              </h2>
              <Reviews reviewsData={pageData.reviews}/>
            </div>
          </section>

          <section className="similar-recipes main_similar-recipes">
            <div className="container">
              <h2 className="section_heading similar-recipes_heading">
                Похожие рецепты
              </h2>
              <SimilarRecipes recipesData={pageData.similarRecipes}/>
            </div>
          </section>

          <CallbackDiscount />

          <div className="delivery-notice">
            <div className="container">
              <p className="delivery-notice_text">
              Все наши курьеры доставляют заказы в медицинских масках, одноразовых перчатках, а также регулярно обрабатывают руки и автомобили. Доставка день-в-день осуществляется по Москве и Химкам при оформлении заказа до 14:00 и при условии свободных мест на доставку. Ваш заказ не покидает холодильника даже в пути! Мы доставляем только специальным транспортом, который оборудован рефрижераторами и поддерживает специальную температуру в кузове.
              </p>

              <button className="delivery-notice_read-more">
                Читать больше
              </button>
            </div>
          </div>

          <Faq data={pageData.faq}/>
          
          <AskQuestion />
        </main>

        <Footer data={pageData.footer}/>
        <FooterMobile data={pageData.footerMobile}/>
      </div>
    );
  };
};

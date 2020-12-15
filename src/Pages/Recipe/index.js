import React from 'react';
import {Header} from './../../components/Header/index';
import {Breadcrumbs} from './../../components/Breadcrumbs/index';
import {PromoSlider} from '../../components/PromoSlider/index';
import {RecipeVideos} from './../../components/RecipeVideos/index';
import {RecipeDescription} from './RecipeDescription';
import {NutritionalValue} from '../../components/NutritionalValue/index';
import {Ingredients} from '../../components/Ingredients/index';
import {IngredientsMobile} from '../../components/Ingredients/IngredientsMobile';
import {RecipeSteps} from '../../components/RecipeSteps/index';
import {Reviews} from './Reviews/index';
import {SimilarRecipes} from './SimilarRecipes/index';
import {CallbackDiscount} from '../../components/CallbackDiscount/index';
import {Footer} from '../../components/Footer/index';
import {Faq} from '../../components/FAQ/index';
import {AskQuestion} from '../../components/AskQuestion/index';
import {FooterMobile} from '../../components/Footer/Mobile/index';
import {pageData} from './constants/index';
import { Forms } from './../../components/Forms/index';
import { DeliveryNotice } from './../../components/DeliveryNotice/index';
//import { cartData } from './constants/index';
//import { Cart } from './../../components/Cart/index';

export class Recipe extends React.Component {
  render() {
    return (
      <div className='page'>
        <Header data={pageData.header}/>
        <main className='main'>

          <section className='breadcrumbs main_breadcrumbs'>
            <div className='container breadcrumbs_container'>
              <Breadcrumbs breadcrumbs={pageData.breadcrumbs}/>
            </div>
          </section>

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
                <RecipeDescription/>
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

          <section className="callback-discount main_callback-discount">
            <CallbackDiscount/>
          </section>

          <section className="delivery-notice main_delivery-notice">
            <DeliveryNotice />
          </section>

          <Faq data={pageData.faq}/>

          <AskQuestion/>
        </main>

        <Footer data={pageData.footer}/>
        <FooterMobile data={pageData.footerMobile}/>
        <Forms />
        
      </div>
    );
  };
};

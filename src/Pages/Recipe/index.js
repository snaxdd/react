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
import {Forms} from './../../components/Forms/index';
import {DeliveryNotice} from './../../components/DeliveryNotice/index';
import {Login} from "./../../components/Login/index";
import {Cart} from './../../components/Cart/index';
import {Modal} from './../../components/Modal/index';
import {cartData} from './constants/index';
import { Feedback } from './../../components/Feedback/index';

export class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      login: false,
      cart: false,
      feedback: false,
      screenWidth: window.innerWidth
    };
  }

  handlerModal = (type) => {
    const toggler = !this.state.modalShow;

    type.modalShow = toggler;
  
    this.setState(type);

    if (toggler) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  updateWindowWidth = () => {
    this.setState({
      screenWidth: window.innerWidth
    });
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.updateWindowWidth);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowWidth);
  }

  render() {
    return (
      <div className='page' ref={this.page}>
        <Header data={pageData.header} modal={this.handlerModal}/>
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
                {
                  this.state.screenWidth < 415 ? 
                  <IngredientsMobile data={pageData.ingredients}/> :
                  null
                }
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
              <Reviews reviewsData={pageData.reviews} modal={this.handlerModal}/>
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
            <DeliveryNotice/>
          </section>

          <Faq data={pageData.faq}/>

          <AskQuestion/>
        </main>

        <Footer data={pageData.footer}/>
        {
          this.state.screenWidth < 415 ? 
          <FooterMobile data={pageData.footerMobile}/> :
          null
        }
        <Forms/>
        {
          <Modal 
          show={this.state.modalShow}
          login={this.state.login ? <Login modal={this.handlerModal}/> : null}
          cart={this.state.cart ? <Cart data={cartData} modal={this.handlerModal}/> : null}
          feedback={this.state.feedback ? <Feedback modal={this.handlerModal}/> : null}
          />
        }
      </div>
    );
  };
};

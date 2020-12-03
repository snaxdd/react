import React from 'react';
import { Header } from './../../components/Header/index';
import { Breadcrumbs } from './../../components/Breadcrumbs/index';
import { Slider } from './../../components/Slider/index';
import { RecipeVideos } from './../../components/RecipeVideos/index';
import { RecipeDescription } from '../../components/RecipeDescription/index';
import { NutritionalValue } from '../../components/NutritionalValue/index';
import { Ingredients } from '../../components/Ingredients/index';
import { RecipeSteps } from '../../components/RecipeSteps/index';
import { Reviews } from './Reviews/index';
import { SimilarRecipes } from './SimilarRecipes/index';
import Image from './../../assets/images/image.jpg';
import { CallbackDiscount } from '../../components/CallbackDiscount/index';
import { Footer } from '../../components/Footer/index';
import { ReactComponent as Delivery } from '../../assets/icons/Delivery.svg';
import { ReactComponent as MenuArrowDown } from '../../assets/icons/Menu-arrow-down.svg';

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
  
          <section className="recipe">
            <div className='slider-top'>
              <div className='container slider-top_container'>
                <Slider sliderData={pageData.topSlider}/>
              </div>
            </div>

            <div className='container recipe_container'>
              <div className="recipe-left-wrap">
                <RecipeVideos data={pageData.content.contentVideos}/>
                <Ingredients data={pageData.ingredients}/>
              </div>
              <div className="recipe-right-wrap">
                <RecipeDescription />
                <NutritionalValue />
                <RecipeSteps recipeSteps={pageData.recipeSteps}/>
              </div>
            </div>
          </section>

          <section className="reviews">
            <div className="container">
              <h2 className="section-heading reviews_section-heading">
                Отзывы о рецепте
              </h2>
              <Reviews reviewsData={pageData.reviews}/>
            </div>
          </section>

          <section className="similar-recipes">
            <div className="container">
              <h2 className="section-heading similar-recipes_section-heading">
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

              <a href="#" className="delivery-notice_read-more">
                Читать больше
              </a>
            </div>
          </div>
        </main>

        <Footer />
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
      {
        text: 'Кто мы',
        iconLeft: '',
        iconRight: ''
      },
      {
        text: 'Доставка и оплата',
        iconLeft: <Delivery />,
        iconRight: ''
      },
      {
        text: 'Наши магазины',
        iconLeft: '',
        iconRight: <MenuArrowDown />
      },
      {
        text: 'Покупателям',
        iconLeft: '',
        iconRight: <MenuArrowDown />
      },
      {
        text: 'Новости',
        iconLeft: '',
        iconRight: ''
      }
    ],
    phoneNumber: '+7 (495) 445-05-50'
  },
  ingredients : {
    title: 'Филе семги без кожи',
    recipeWeight: '150 г',
    ingredients: [
      {
        name: 'Руккола',
        count: '30 г'
      },
      {
        name: 'Авокадо',
        count: '0.5 шт'
      },
      {
        name: 'Перец черный молотый',
        count: 'По вкусу'
      },
      {
        name: 'Соль',
        count: 'По вкусу'
      },
      {
        name: 'Яйцо куриное',
        count: '2 шт.'
      },
      {
        name: 'Песто',
        count: '1 ст. л'
      },
      {
        name: 'Хлеб зерновой',
        count: '2 ломтика'
      },
      {
        name: 'Сыр Arla Natura Сливочный Лёгкий',
        count: '1 ломтик'
      }
    ]
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
  },
  recipeSteps: [
    {
      id: 1,
      title: 'Шаг 1',
      text: `Для начала приготовим смесь из пряных трав и соли. Помещаем их в чашку. 
      Добавляем соль, 1 ст. ложку оливкового масла и перец. Перемешиваем.`
    },
    {
      id: 2,
      title: 'Шаг 2',
      text: `Разогреваем духовку до 180 °C. Готовим блюдо, в котором будем запекать нашу сёмгу. 
      Наливаем 1 ст. ложку оливкового масла, аккуратно распределяем по дну всей формы. 
      Выкладываем рыбку.`
    },
    {
      id: 3,
      title: 'Шаг 3',
      text: `Наливаем 1 ст. ложку оливкового масла, аккуратно распределяем по дну всей формы. 
      Добавляем соль, 1 ст. ложку оливкового масла и перец. Перемешиваем. 
      Выкладываем рыбку.`
    },
    {
      id: 4,
      title: 'Шаг 4',
      text: `Наливаем 1 ст. ложку оливкового масла, аккуратно распределяем по дну всей формы. 
      Добавляем соль, 1 ст. ложку оливкового масла и перец. Перемешиваем. 
      Выкладываем рыбку.`
    },
    {
      id: 5,
      title: 'Шаг 5',
      text: `Отправляем в духовой шкаф на 30 минут. 
      И наслаждаемся прекрасным ароматом тимьяна или розмарина и нашей готовящейся в 
      духовке сёмги. Через полчаса всё готово к подаче на стол.`
    }
  ],
  reviews: {
    overallRating: {
      text: 'Общий рейтинг',
      rate: 4,
      commentsNumber: 12
    },
    comments: [
      {
        id: 1,
        name: 'Виктор Рыбин',
        rate: 5,
        comment: `Отличная модель в таком ценовом диапазоне! Заряд держит отлично, 
        при интенсивной нагрузке. Игры поддерживает просто на высоте, не вылетает. 
        Огромный по величине экран.`,
        date: new Date().toLocaleDateString()
      },
      {
        id: 2,
        name: 'Анастасия',
        rate: 5,
        comment: `Отличная модель в таком ценовом диапазоне! 
        Заряд держит отлично, при интенсивной нагрузке. 
        Игры поддерживает просто на высоте, не вылетает. Огромный по величине экран.`,
        date: new Date().toLocaleDateString()
      },
      {
        id: 3,
        name: 'Андрей Рыбаков',
        rate: 5,
        comment: `Отличная модель в таком ценовом диапазоне! 
        Заряд держит отлично, при интенсивной нагрузке. 
        Игры поддерживает просто на высоте, не вылетает. Огромный по величине экран. `,
        date: new Date().toLocaleDateString()
      },
      {
        id: 4,
        name: 'Андрей Рыбаков',
        rate: 5,
        comment: `Отличная модель в таком ценовом диапазоне! 
        Заряд держит отлично, при интенсивной нагрузке. 
        Игры поддерживает просто на высоте, не вылетает. Огромный по величине экран. `,
        date: new Date().toLocaleDateString()
      }
    ]
  },
  similarRecipes: [
    {
      id: 1,
      title: 'Мидии на створке',
      text: `Особенно вкусны мидии 
      с середины июня до февраля, 
      так как в мае они недостаточнно жирны.`,
      rate: 5,
      reviewsCount: 10,
      cookingTime: '30-40 мин',
      calories: '384 ккал'
    },
    {
      id: 2,
      title: 'Мидии на створке',
      text: `Особенно вкусны мидии 
      с середины июня до февраля, 
      так как в мае они недостаточнно жирны.`,
      rate: 5,
      reviewsCount: 6,
      cookingTime: '30-55 мин',
      calories: '235 ккал'
    },
    {
      id: 3,
      title: 'Мидии на створке',
      text: `Особенно вкусны мидии 
      с середины июня до февраля, 
      так как в мае они недостаточнно жирны.`,
      rate: 5,
      reviewsCount: 7,
      cookingTime: '30-66 мин',
      calories: '325 ккал'
    },
    {
      id: 4,
      title: 'Мидии на створке',
      text: `Особенно вкусны мидии 
      с середины июня до февраля, 
      так как в мае они недостаточнно жирны.`,
      rate: 5,
      reviewsCount: 2,
      cookingTime: '30-427 мин',
      calories: '123 ккал'
    },
    {
      id: 5,
      title: 'Мидии на створке',
      text: `Особенно вкусны мидии 
      с середины июня до февраля, 
      так как в мае они недостаточнно жирны.`,
      rate: 5,
      reviewsCount: 4,
      cookingTime: '12-30 мин',
      calories: '323 ккал'
    },
  ]
}
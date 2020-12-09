//TopMenu Icons
import { ReactComponent as IconDelivery } from '../../../assets/icons/Delivery.svg';
import { ReactComponent as IconMenuArrowDown } from '../../../assets/icons/Menu-arrow-down.svg';

//Nutritional Value Icons
import { ReactComponent as IconMeat } from './../../../assets/icons/NutritionalValue/Meat.svg';
import { ReactComponent as IconPizza } from './../../../assets/icons/NutritionalValue/Pizza.svg';
import { ReactComponent as IconRice } from './../../../assets/icons/NutritionalValue/Rice.svg';
import { ReactComponent as IconCalories } from './../../../assets/icons/NutritionalValue/Calories.svg';

//Images
import Image from './../../../assets/images/image.jpg';
import CommentImage from './../../../assets/images/Reviews/comment-image.jpg';
import IngredientsImg from '../../../assets/images/Ingredients/title-img.png';

export const pageData = {
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
        iconLeft: <IconDelivery />,
        iconRight: ''
      },
      {
        text: 'Наши магазины',
        iconLeft: '',
        iconRight: <IconMenuArrowDown />  
      },
      {
        text: 'Покупателям',
        iconLeft: '',
        iconRight: <IconMenuArrowDown />
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
    image: IngredientsImg,
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
        date: new Date().toLocaleDateString(),
        image: CommentImage
      },
      {
        id: 3,
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
  ],
  footer: {
    menu: [
      {
        id: 1,
        text: 'Весь ассортимент',
        href: '#'
      },
      {
        id: 2,
        text: 'Наши магазины',
        href: '#'
      },
      {
        id: 3,
        text: 'О нас',
        href: '#'
      },
      {
        id: 4,
        text: 'Программа лояльности',
        href: '#'
      },
      {
        id: 5,
        text: 'Оплата',
        href: '#'
      },
      {
        id: 6,
        text: 'Гарантии и возврат',
        href: '#'
      },
      {
        id: 7,
        text: 'Условия доставки',
        href: '#'
      },
      {
        id: 8,
        text: 'Отзывы',
        href: '#'
      },
    ]
  },
  footerMobile: [
    {
      id: 1,
      title: 'О компании',
      links: [
        {
          id: 1,
          href: '#',
          text: 'Tested link'
        },
        {
          id: 2,
          href: '#',
          text: 'Tested link'
        },
        {
          id: 3,
          href: '#',
          text: 'Tested link'
        }
      ]
    },
    {
      id: 2,
      title: 'Клиентам',
      links: [
        {
          id: 1,
          href: '#',
          text: 'Весь ассортимент'
        },
        {
          id: 2,
          href: '#',
          text: 'Условия доставки'
        },
        {
          id: 3,
          href: '#',
          text: 'Программа лояльности'
        }
      ]
    },
    {
      id: 3,
      title: 'Партнерам',
      links: [
        {
          id: 1,
          href: '#',
          text: 'Tested link'
        },
        {
          id: 2,
          href: '#',
          text: 'Tested link'
        },
        {
          id: 3,
          href: '#',
          text: 'Tested link'
        }
      ]
    }
  ],
  nutritionalValue: [
    {
      id: 1,
      image: <IconMeat />,
      title: 'белки',
      weight: '120',
      weightUnit: 'грамм'
    },
    {
      id: 2,
      image: <IconPizza />,
      title: 'жиры',
      weight: '12',
      weightUnit: 'грамм'
    },
    {
      id: 3,
      image: <IconRice />,
      title: 'углеводы',
      weight: '230',
      weightUnit: 'грамм'
    },
    {
      id: 4,
      image: <IconCalories />,
      title: 'калорийность',
      weight: '387',
      weightUnit: 'ккал'
    },
  ],
  faq: [
    {
      id: 1,
      title: 'А у вас точно качественная продукция?'
    },
    {
      id: 2,
      title: 'А это дороже, чем покупать в магазине?'
    },
    {
      id: 3,
      title: 'Как происходит доставка и оплата?'
    },
    {
      id: 4,
      title: 'Где и как собираются заказы?'
    },
  ]
}
import React from 'react';
import TitleImg from '../../assets/images/Ingredients/title-img.png';
import { BuyButton } from '../BuyButton/index';

export class Ingredients extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <table className='ingredients-table'>
        <thead>
          <tr>
            <td className='ingredients-table_title'>
              Ингредиенты
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className='ingredients-table_row ingredients-table_head'>
            <td>
              <img src={TitleImg} alt="" className='ingredients-table_recipe-img'/>
            </td>
            <td className='ingredients-table_recipe-title'>
              Филе семги без кожи
            </td>
            <td className='ingredients-table_recipe-weight'>150г</td>
            <td className='ingredients-table_data'>
              <BuyButton />
            </td>
          </tr>
          <tr className='ingredients-table_row'>
            <td className='ingredients-table_product-name'>Руккола</td>
            <td className='ingredients-table_product-count' colSpan='2'>30 г</td>
          </tr>
          <tr className='ingredients-table_row'>
            <td className='ingredients-table_product-name'>Авокадо</td>
            <td className='ingredients-table_product-count' colSpan='2'>0.5 шт</td>
          </tr>
          <tr className='ingredients-table_row'>
            <td className='ingredients-table_product-name'>Перец черный молотый</td>
            <td className='ingredients-table_product-count' colSpan='2'>По вкусу</td>
          </tr>
          <tr className='ingredients-table_row'>
            <td className='ingredients-table_product-name'>Соль</td>
            <td className='ingredients-table_product-count' colSpan='2'>По вкусу</td>
          </tr>
          <tr className='ingredients-table_row'>
            <td className='ingredients-table_product-name'>Яйцо куриное</td>
            <td className='ingredients-table_product-count' colSpan='2'>2 шт</td>
          </tr>
          <tr className='ingredients-table_row'>
            <td className='ingredients-table_product-name'>Песто</td>
            <td className='ingredients-table_product-count' colSpan='2'>1 ст.л</td>
          </tr>
          <tr className='ingredients-table_row'>
            <td className='ingredients-table_product-name'>Хлеб зерновой</td>
            <td className='ingredients-table_product-count' colSpan='2'>2 ломтика</td>
          </tr>
          <tr className='ingredients-table_row'>
            <td className='ingredients-table_product-name'>Сыр Arla Natura Сливочный легкий</td>
            <td className='ingredients-table_product-count' colSpan='2'>1 ломтик</td>
          </tr>
        </tbody>
      </table>
    );
  };
};
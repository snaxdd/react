import React from 'react';

export class RecipeDescription extends React.Component {
  render() {
    return(
      <div className="recipe_description">
        <h2 className="section_heading recipe_description-heading">
          Описание
        </h2>
        <div className='recipe_description-text'>
          Популярность красной рыбы, и в частности лосося, 
          растет с каждым днем. 
          Из-за своего восхитительного вкуса и богатого витаминного 
          состава она по праву считается деликатесом.
        </div>
      </div>
    );
  };
};
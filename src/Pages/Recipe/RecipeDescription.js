import React from 'react';

export class RecipeDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='recipe_description'>
        Популярность красной рыбы, и в частности лосося, 
        растет с каждым днем. 
        Из-за своего восхитительного вкуса и богатого витаминного 
        состава она по праву считается деликатесом.
      </div>
    );
  };
};
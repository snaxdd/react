import React from 'react';
import { Step } from './Step';

export class RecipeSteps extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="recipe-steps recipe_recipe-steps">
        {this.props.recipeSteps.map((item, index, arr) => {
          let titleClass = '',
            textClass = '';
          
          if (index === 0) {
            titleClass = 'recipe-steps_title--first';
            textClass = 'recipe-steps_text--first';
          } else if (index === arr.length - 1) {
            titleClass = 'recipe-steps_title--last';
            textClass = 'recipe-steps_text--last';
          }
          
          return(
            <Step 
              title={item.title} 
              text={item.text} 
              key={item.id}
              classText={textClass}
              classTitle={titleClass}
            />
          );
        })}
      </div>
    );
  };
};
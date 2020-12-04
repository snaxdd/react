import React from 'react';
import { Step } from './Step';

export class RecipeSteps extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="recipe_steps">
        {this.props.recipeSteps.map((item, index, arr) => {
          let titleClass = '',
            textClass = '';
          
          if (index === 0) {
            titleClass = 'recipe_step-title--first';
            textClass = 'recipe_step-text--first';
          } else if (index === arr.length - 1) {
            titleClass = 'recipe_step-title--last';
            textClass = 'recipe_step-text--last';
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
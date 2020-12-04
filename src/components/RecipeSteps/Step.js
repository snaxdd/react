import React from 'react';

export class Step extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="recipe_step">
        <h3 className={`recipe_step-title ${this.props.classTitle}`}>
          {this.props.title}
        </h3>
        <p className={`recipe_step-text ${this.props.classText}`}>
          {this.props.text}
        </p>
      </div>
    );
  };
};
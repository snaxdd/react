import React from 'react';

export class Step extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="recipe-steps_step">
        <h3 className={`recipe-steps_title ${this.props.classTitle}`}>
          {this.props.title}
        </h3>
        <p className={`recipe-steps_text ${this.props.classText}`}>
          {this.props.text}
        </p>
      </div>
    );
  };
};
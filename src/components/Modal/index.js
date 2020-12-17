import React from 'react';

/*if(!this.props.show) {
  return null;
  } */

export class Modal extends React.Component {
  render() {
    return (
      <div
        className={`modal${this.props.show ? 
        ' modal--open' : ''}`}>
        {this.props.login}
        {this.props.cart}
        {this.props.feedback}
      </div>
    );
  };
};
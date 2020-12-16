import React from 'react';

export class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div
        className="modal">
        {this.props.login}
        {this.props.cart}
        {this.props.feedback}
      </div>
    );
  };
};
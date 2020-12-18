import React from 'react';

export class Modal extends React.Component {
  render() {
    return (
      <div
        className={`modal${this.props.modalShow
        ? ' modal--open'
        : ''}`}>
        {this.props.children}
      </div>
    );
  };
};
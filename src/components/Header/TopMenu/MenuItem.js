import React from 'react';
import {DropDown} from './DropDown';

export class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownOpen: false
    };
    this.menuButton = React.createRef();
    this.dropDownItem = this.props.dropDown;
  }

  handlerDropDown = () => {
    const toggler = !this.props.someOneOpen;

    if (this.props.someOneOpen) {
      this
        .props
        .handlerSomeOneOpen();

      this.handlerDropDown();
    }

    this
      .props
      .handlerSomeOneOpen();

    this.setState({dropDownOpen: toggler});
  }

  componentDidMount = () => {
    if (this.dropDownItem) {
      this
        .menuButton
        .current
        .addEventListener('click', this.handlerDropDown);
    }
  }

  componentWillUnmount = () => {
    this
      .menuButton
      .current
      .removeEventListener('click', this.handlerDropDown);
  }

  render() {
    return (
      <li className='header_menu-item'>
        {this.props.iconL}
        <a ref={this.menuButton} href={this.props.href} className='header_menu-link'>
          {this.props.text}
        </a>
        <DropDown 
          dropDown={this.props.dropDown} 
          open={this.state.dropDownOpen}
        />
        {this.props.iconR}
      </li>
    );
  };
};
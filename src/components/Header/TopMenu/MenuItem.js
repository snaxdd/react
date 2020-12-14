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

  dropDown = () => {
    return this.props.dropDown
      ? <DropDown dropDown={this.props.dropDown} open={this.state.dropDownOpen}/>
      : null;
  }

  handleDropDown = () => {
    const dropDownOpen = !this.state.dropDownOpen;
    this.setState({
      dropDownOpen: dropDownOpen
    });
  }

  componentDidMount = () => {
    if (this.dropDownItem) {
      this.menuButton.current.addEventListener('click', this.handleDropDown);
    }
  }

  componentWillUnmount = () => {
    this.menuButton.current.removeEventListener('click', this.handleDropDown);
  }

  render() {
    return (
      <li className='header_menu-item'>
        {this.props.iconL}
        <a ref={this.menuButton} href={this.props.href} className='header_menu-link'>
          {this.props.text}
        </a>
        {this.dropDown()}
        {this.props.iconR}
      </li>
    );
  };
};
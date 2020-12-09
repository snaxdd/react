import React from 'react';
import {MenuInnerItem} from './MenuInnerItem';
import {ReactComponent as IconArrow} from './../../../assets/icons/Spoiler/arrow.svg';

export class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      contentBlockHeight: 0,
      contentOpen: true
    }
    this.refHiddenContent = React.createRef();
    this.refButton = React.createRef();
  }

  handleDropDown = () => {
    let newContentOpen = !this.state.contentOpen;
    
    this.setState({
      contentOpen: newContentOpen
    })
    
    if (this.state.contentOpen) {
      this.refHiddenContent.current.style.height = this.state.contentBlockHeight + "px";
    } else {
      this.refHiddenContent.current.style.height = "0px";
    }    
  };

  componentDidMount = () => {
    this.setState({
      contentBlockHeight: this.refHiddenContent.current.clientHeight
    })

    this.refHiddenContent.current.style.height = "0px";
    this.refHiddenContent.current.style.overflow = 'hidden';
  }

  componentWillUnmount = () => {
    this.refButton.current.removeEventListener('click', this.handleDropDown);
  }

  render() {
    return (
      <li className="footer-mobile_menu-item">
        <div
          ref={this.refButton} 
          className="footer-mobile_menu-heading-wrap" 
          onClick={() => this.handleDropDown()}
        >
          <span className="footer-mobile_menu-list-heading">
            {this.props.title}
          </span>
          <IconArrow 
            className="footer-mobile_menu-list-icon"
          />
        </div>
        <ul
          ref={this.refHiddenContent} 
          className="footer-mobile_menu-inner-list"
        >
          {this
            .props
            .innerLinks
            .map(item => {
              return (<MenuInnerItem key={item.id} href={item.href} text={item.text}/>)
            })}
        </ul>
      </li>
    );
  };
};
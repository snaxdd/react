import React from 'react';
import {MenuInnerItem} from './MenuInnerItem';
import {ReactComponent as IconArrow} from './../../../assets/icons/Spoiler/arrow.svg';

export class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      spoiler: false
    }
  }

  handleSpoiler = () => {
    this.setState({
      spoiler: !this.state.spoiler
    });
  };

  render() {
    return (
      <li className="footer-mobile_menu-item">
        <div className="footer-mobile_menu-heading-wrap" onClick={() => this.handleSpoiler()}>
          <span className="footer-mobile_menu-list-heading">
            {this.props.title}
          </span>
          <IconArrow 
            className="footer-mobile_menu-list-icon"
          />
        </div>
        <ul className="footer-mobile_menu-inner-list" style={{
          display: this.state.spoiler ? 'block' : 'none'
        }}>
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
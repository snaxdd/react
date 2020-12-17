import React from "react";
import {LeftListItem} from './LeftListItem';

export class LeftList extends React.Component {
  render() {
    return (
      <ul className="catalog_left-list">
        {this
          .props
          .catalog
          .map((item, index) => {
            return <LeftListItem 
              key={Math.random()} 
              text={item.heading}
              active={index === this.props.currentItem ? true : false}
              index={index}
              setCurrent={this.props.setCurrent}
            />
          })}
      </ul>
    );
  }
};
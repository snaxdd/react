import React from 'react';
import { LeftList } from './LeftList';
import { RightList } from './RightList';

export class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 0,
    };
  }

  setCurrentItem = (index) => {
    this.setState({
      currentItem: index,
    });
  };

  render() {
    return (
      <div
        className={`catalog${
          this.props.showCatalog ? ' catalog--open' : ' catalog--close'
        }`}
      >
        <div className='catalog_wrap'>
          <div className='container catalog_container'>
            <LeftList
              catalog={this.props.catalog}
              setCurrent={this.setCurrentItem}
              currentItem={this.state.currentItem}
            />
            <RightList
              catalog={this.props.catalog}
              currentItem={this.state.currentItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

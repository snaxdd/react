import React from 'react';
import { LeftList } from './LeftList';
import { RightList } from './RightList';

export class Catalog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.showCatalog) {
      return null;
    }
    return(
      <div className="catalog">
        <div className="container">
          <div className="catalog_wrap">
            <LeftList catalog={this.props.catalog} />
            <RightList />
          </div>
        </div>
      </div>
    );
  };
};
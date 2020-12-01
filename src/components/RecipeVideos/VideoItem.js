import React from 'react';
import ImgPlaceholder from '../../assets/images/ContentVideos/placeholder.png';

export class VideoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='recipe-videos_item'>
        <img src={ImgPlaceholder} alt=""/>
      </div>
    );
  };
};
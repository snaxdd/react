import React from 'react';
import ImagePlaceholder from '../../assets/images/ContentVideos/placeholder.png';

export class VideoItem extends React.Component {
  render() {
    return(
      <div className='recipe-videos_item'>
        <img src={ImagePlaceholder} alt=""/>
      </div>
    );
  };
};
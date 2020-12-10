import React from 'react';
import { VideoItem } from './VideoItem';

export class RecipeVideos extends React.Component {
  render() {
    return(
      <div className='recipe-videos recipe_recipe-videos'>
        {this.props.data.map(item => <VideoItem key={item.id}/>)}
      </div>
    );
  }; 
};
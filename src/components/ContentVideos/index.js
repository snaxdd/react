import React from 'react';
import { VideoItem } from "./VideoItem";

export class ContentVideos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="content-videos">
        {this.props.data.map(item => <VideoItem key={item.id}/>)}
      </div>
    );
  }; 
};
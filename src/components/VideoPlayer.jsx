import React from 'react';
import "../App.css"

const VideoPlayer = ({ url }) => {
  return (
    <div className="video-container">
      <video className="video-player" controls>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

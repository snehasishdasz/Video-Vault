import React from 'react';

const VideoPlayer = ({ url }) => {
  return (
    <div style={{ maxWidth: '100%', maxHeight: '100%', overflow: 'hidden' }}>
      <video width="100%" height="auto" controls>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

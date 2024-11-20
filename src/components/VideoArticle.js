import React from 'react';
import movie2 from '../assets/kinzig.mp4';

const VideoArticle = () => (
  <div className="container">
    <div className="article">
      <div className="article-header">
          <h2>Erstmal ein kurzes Ständchen 🥰🎸</h2>
          <h3 className='colored-subheading'>
            Ich liebe dich! ♥
          </h3>
        </div>
      <video controls>
        <source src={movie2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
);

export default VideoArticle;

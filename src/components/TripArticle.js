import React, { useState, useEffect } from 'react';
import { getTimeRemaining } from '../utils/utils';

const TripArticle = ({ src, title, deadline, link }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(deadline));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining(deadline));
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [deadline]); // Re-run this effect only if the deadline changes

  return (
    <div className="container">
      <div className="article">
        <div className="article-header">
          <h2>{title}</h2>
          <h3 className="colored-subheading">
            In {timeRemaining.days} Tagen,
            &nbsp;{timeRemaining.hours} Stunden,
            &nbsp;{timeRemaining.minutes} Minuten und
            &nbsp;{timeRemaining.seconds} Sekunden
          </h3>
        </div>
        <iframe
          src={src}
          width="600"
          title={title}
          height="450"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <div className="trip-link">
        {link ? (
          <h2>
            Immer noch keine Ahnung was es ist? 😮 <a href={link}>Dann schau mal hier!</a>
          </h2>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default TripArticle;

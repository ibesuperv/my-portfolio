import React, { useState, useEffect } from 'react';
import './error.css'; // Assuming you have the CSS styles in a separate file

const NotFoundPage = () => {
  const [stars, setStars] = useState([]);

  useEffect(
    ()=>{
        document.title="404";
    }
  )

  useEffect(() => {
    const intervalId = setInterval(createStar, 100);
    return () => clearInterval(intervalId);
  }, []);

  const createStar = () => {
    const star = {
      id: Date.now(),
      right: Math.random() * 500,
      top: Math.random() * window.screen.height,
      speed: Math.random() * 3 + 2, // Adjust speed range for slower movement
    };
    setStars(prevStars => [...prevStars, star]);
  };

  useEffect(() => {
    const intervalId = setInterval(moveStars, 10);
    return () => clearInterval(intervalId);
  }, []);

  const moveStars = () => {
    setStars(prevStars =>
      prevStars.map(star => ({
        ...star,
        right: star.right >= window.screen.width ? -10 : star.right + star.speed,
      }))
    );
  };

  return (
    <div className="body">
      <div className="text">
        <div>ERROR</div>
        <h1>404</h1>
        <hr />
        <div>Page Not Found</div>
      </div>
      <div className="astronaut">
        <img
          src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
          alt=""
          className="src"
        />
      </div>
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{ top: `${star.top}px`, right: `${star.right}px` }}
        />
      ))}
    </div>
  );
};

export default NotFoundPage;

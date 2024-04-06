import React, { useState, useEffect } from 'react';
import './loading.scss';

function Loading() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 1;
        return newPercentage > 100 ? 100 : newPercentage; // Cap at 100%
      });
    }, 49); // Adjust the interval to control the speed of the progress

    // Clear the interval when component unmounts or when percentage reaches 100
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="parent cursor-none">
      <div className="device">
        <div className="device__a">
          <div className="device__a-1"></div>
          <div className="device__a-2"></div>
        </div>
        <div className="device__b"></div>
        <div className="device__c"></div>
        <div className="device__d"></div>
        <div className="device__e"></div>
        <div className="device__f"></div>
        <div className="device__g"></div>
      </div>
      <div className="loading-percentage">{percentage}%</div> {/* Display the loading percentage */}
    </div>
  );
}

export default Loading;

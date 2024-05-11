import React from 'react';
import "./portfolio.css";

function Name() {
  const style1 = {
    color: 'white',
    fontSize: window.innerWidth < 430 ? '1rem' : '1.8rem', 
  };

  const style2 = {
    fontSize: window.innerWidth < 430 ? '0.8rem' : '1rem',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <div id='name'>
      <div className="name">
        <p className="intro" style={style2}>
          Hi There 👋 ! This is 
        </p>
        <p className="varun" style={style1}>
         <span className="text-red-400">V</span>arun B 
        </p>
      </div>
    </div>
  );
}

export default Name;

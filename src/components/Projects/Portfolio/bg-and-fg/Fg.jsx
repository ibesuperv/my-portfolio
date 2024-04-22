import React, { useRef, useState, useEffect } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';

function Fg() {
  const ref = useRef(null);
  const [showCards, setShowCards] = useState(true); 

  const handleResize = () => {
    if (window.innerWidth < 430) {
      setShowCards(false);
    } else {
      setShowCards(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={ref} className="absolute bg-transparent cursor-none z-[3] w-full h-full top-0 left-0">
      <div className="w-full py-10 absolute top-[5%] flex justify-center text-center cursor-none text-zinc-500 text-xs font-semibold">
        <ul>
          <li><Link className='underline decoration-red-400 cursor-none' to="/country">countries app</Link></li>
          <li><Link className='underline decoration-red-400 cursor-none' to="/notes">notes app</Link></li>
        </ul>
      </div>
      {showCards && <Cards reference={ref} />}
    </div>
  );
}

export default Fg;

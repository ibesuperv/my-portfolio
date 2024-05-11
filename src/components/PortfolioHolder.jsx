import React, { useState, useEffect } from 'react';
import Navbar from './Projects/Portfolio/Navbar';
import Home from './Projects/Portfolio/Home';
import Name from './Projects/Portfolio/Name';
import Eyes from './Projects/Portfolio/Eyes';
import Impossible from './Projects/Portfolio/Impossible';
import LocomotiveScroll from 'locomotive-scroll';
import Aboutme from './Projects/Portfolio/Aboutme';
import Contact from './Projects/Portfolio/Contact';
import { motion, useAnimation } from 'framer-motion'; // Import framer-motion components
import ProjectHolder from './Projects/Portfolio/ProjectHolder';
import AnimatedCursor from 'react-animated-cursor';


function PortfolioHolder() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const locomotiveScroll = new LocomotiveScroll;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500); 
  }, []);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  const control = useAnimation();

  useEffect(() => {
    if (isLoaded) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, isLoaded]);

  return (
    <>
      <div className="bg-black overflow-hidden">
      <AnimatedCursor
          color="255, 255, 255"
          innerSize={40}
          outerSize={15}
          innerScale={1}
          outerScale={0.5}
          outerAlpha={1}
          outerStyle={{
            mixBlendMode: 'exclusion',
          }}
          innerStyle={{
            mixBlendMode: 'exclusion',
          }}
        />
        
        <Navbar />

        <motion.div variants={variants} initial="hidden" animate={control}>
          <Home />
        </motion.div>
        <Name />
          <Aboutme />
          <Impossible />
        {windowWidth >= 430 && (
            <Eyes />
        )}
          <Contact />
          <ProjectHolder/>
    
      </div>
    </>
  );
}

export default PortfolioHolder;

import React, { useState, useEffect } from 'react';
import Navbar from './Projects/Portfolio/Navbar';
import Home from './Projects/Portfolio/Home';
import Eyes from './Projects/Portfolio/Eyes';
import Impossible from './Projects/Portfolio/Impossible';
import LocomotiveScroll from 'locomotive-scroll';
import Aboutme from './Projects/Portfolio/Aboutme';
import Contact from './Projects/Portfolio/Contact';
import { motion, useAnimation } from 'framer-motion'; // Import framer-motion components
import AnimatedCursor from 'react-animated-cursor';

function PortfolioHolder() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);

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
    // Simulate loading delay
    setTimeout(() => {
      setIsLoaded(true);
    }, 500); // 2-second loading delay (adjust as needed)
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
          outerSize={9}
          innerScale={1}
          outerScale={0.3}
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
        <motion.div variants={variants} initial="hidden" animate={control}>
          <Aboutme />
        </motion.div>
        <motion.div variants={variants} initial="hidden" animate={control}>
          <Impossible />
        </motion.div>
        {windowWidth >= 430 && (
          <motion.div variants={variants} initial="hidden" animate={control}>
            <Eyes />
          </motion.div>
        )}
        <motion.div variants={variants} initial="hidden" animate={control}>
          <Contact />
        </motion.div>
      </div>
    </>
  );
}

export default PortfolioHolder;

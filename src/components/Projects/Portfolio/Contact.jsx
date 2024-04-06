import React, { useEffect, useState } from 'react';
import { LuFacebook } from 'react-icons/lu';
import { AiFillInstagram } from 'react-icons/ai';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

function Contact() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup the event listener
    };
  }, []);

  const isMobile1024 = windowWidth <= 1024;
  const isMobile325 = windowWidth <= 325;

  const iconStyles = {
    color: 'white',
    fontSize: isMobile325 ? '40px' : isMobile1024 ? '60px' : '90px',
    marginRight: isMobile325 ? '10px' : isMobile1024 ? '20px' : '80px',
  };

  const iconStyles1 = {
    color: 'white',
    fontSize: isMobile325 ? '40px' : isMobile1024 ? '60px' : '90px',
  };

  return (
    <div id='contact' className='w-full h-screen bg-black grid place-content-center'>
      <div className='flex'>
        <motion.div className='icons' style={iconStyles} whileHover={{ scale: 1.3 }}>
          <a href='https://www.facebook.com/profile.php?id=100055873277563'><LuFacebook className='icons' style={iconStyles} /></a>
        </motion.div>
        <motion.div className='icons' style={iconStyles} whileHover={{ scale: 1.3 }}>
          <a href='https://www.instagram.com/i_be_super_v/'><AiFillInstagram className='icons' style={iconStyles} /></a>
        </motion.div>
        <motion.div className='icons' style={iconStyles} whileHover={{ scale: 1.3 }}>
          <a href='mailto:varunb5725@gmail.com'><MdOutlineAlternateEmail className='icons' style={iconStyles} /></a>
        </motion.div>
        <motion.div className='icons' style={iconStyles} whileHover={{ scale: 1.3 }}>
          <a href='https://t.me/ibeSuper_v'><FaTelegramPlane className='icons' style={iconStyles1} /></a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;

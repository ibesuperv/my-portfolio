import React from 'react';
import { LuFacebook } from 'react-icons/lu';
import { AiFillInstagram } from 'react-icons/ai';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa';

function Contact() {
  const iconStyles = {
    color: 'white',
    fontSize: '200px',
    marginRight: '80px',
  };

  const handleMouseEnter = (event) => {
    event.target.style.color = '#F72';
  };

  const handleMouseLeave = (event) => {
    event.target.style.color = '#fff';
  };

  return (
    <div className='w-full h-screen bg-black grid place-content-center'>
      <div className='flex'>
        <LuFacebook
          className='icons'
          style={iconStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <AiFillInstagram
          className='icons'
          style={iconStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <MdOutlineAlternateEmail
          className='icons'
          style={iconStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <FaTelegramPlane
          className='icons'
          style={iconStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
}

export default Contact;

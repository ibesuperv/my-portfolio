import React from 'react';
import { motion } from 'framer-motion';

function Cards({ reference }) {
  return (
    <>
      
        <motion.div
          drag
          dragConstraints={reference}
          whileDrag={{ scale: 1.2 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          className="w-0 h-0 mt-8 rounded-full text-white overflow-hidden"
          style={{
            backgroundImage: 'url("/flag.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            cursor: 'grab', 
          }}
        ></motion.div>
      

      
        <motion.div
          drag
          dragConstraints={reference}
          whileDrag={{ scale: 1.2 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          className="w-20 h-20 mt-8 rounded-full text-white overflow-hidden"
          style={{
            backgroundImage: 'url("/photo.JPG")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            cursor: 'grab',
          }}
        ></motion.div>
        
      
      
    </>
  );
}

export default Cards;

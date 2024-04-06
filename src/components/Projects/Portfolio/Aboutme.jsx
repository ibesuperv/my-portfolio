import React, { useState } from 'react';
import Hobbies from "./about/Hobbies"
import Education from "./about/Education"
import Skills from "./about/Skills"
import { motion } from 'framer-motion';
import "./portfolio.css"

function Aboutme() {
  const [showEdu, setShowEdu] = useState(true);
  const [showHobbies, setShowHobbies] = useState(false);
  const [showSkill, setShowSkill] = useState(false);

  const handleEduClick = () => {
    setShowEdu(true);
    setShowHobbies(false);
    setShowSkill(false);
  };

  const handleHobbiesClick = () => {
    setShowEdu(false);
    setShowHobbies(true);
    setShowSkill(false);
  };

  const handleSkillsClick = () => {
    setShowEdu(false);
    setShowHobbies(false);
    setShowSkill(true);
  };

  const style1 = {
    color: 'grey',
    textAlign: 'center',
    fontSize: window.innerWidth < 430 ? '1rem' : '1.8rem', // Updated this line
  }

  const style2 = {
    fontSize: window.innerWidth < 430 ? '0.8rem' : '1rem', // Updated this line
    color: 'white',
    textAlign: 'center',
  }

  return (
    <div id='about'>
      <div className="container">
        <ul>
          <li
            className={`transform font-bold hover:scale-110 transition-transform duration-300 ease-in-out`}
            style={showHobbies ? style2 : style1}
            onClick={handleHobbiesClick}
          >
            HOBBIES
          </li>
          <li
            className={`transform font-bold hover:scale-110 transition-transform duration-300 ease-in-out`}
            style={showEdu ? style2 : style1}
            onClick={handleEduClick}
          >
            EDUCATION
          </li>
          <li
            className={`transform font-bold hover:scale-110 transition-transform duration-300 ease-in-out`}
            style={showSkill ? style2 : style1}
            onClick={handleSkillsClick}
          >
            SKILLS
          </li>
        </ul>
      </div>
      <div className="data">
        <motion.div
          className="parent"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
          {showHobbies && (
            <motion.div className='about'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Hobbies />
            </motion.div>
          )}
          {showEdu && (
            <motion.div className='about'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Education />
            </motion.div>
          )}
          {showSkill && (
            <motion.div className='about'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Skills />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Aboutme;

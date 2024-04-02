import React, { useState, useEffect } from 'react';
import Education from './about/Education';
import Hobbies from './about/Hobbies';
import Skills from './about/Skills';

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
  return (
    <div className="w-full h-screen flex ">
      <div className="w-1/2  flex flex-col justify-center items-center grow">
        <ul>
          <li className={`cursor-pointer text-white text-center text-5xl transition duration-300 pb-5 transform font-bold hover:scale-110 ${showHobbies ? 'text-xl' : ''}`} onClick={handleHobbiesClick}>HOBBIES</li>
          
          <li className={`cursor-pointer text-white text-center text-5xl transition duration-300 pb-5 transform font-bold hover:scale-110 ${showEdu ? 'text-xl ' : ''}`} onClick={handleEduClick}>EDUCATION</li>
          <li className={`cursor-pointer text-white text-center text-5xl transition duration-300 pb-5 transform font-bold hover:scale-110 ${showSkill ? 'text-xl' : ''}`} onClick={handleSkillsClick}>SKILLS</li>
        </ul>
      </div>
      <div className="w-1/2 h-screen  flex justify-center text-white items-center">
        <div className="flex justify-center items-center bg-[#212121] rounded-xl w-[90%] h-[90%] font-bold tracking-wide">
        
        {showHobbies && <Hobbies />}
        {showEdu && <Education />}
        {showSkill && <Skills />}
        </div>
      </div>
    </div>
  );
}

export default Aboutme;

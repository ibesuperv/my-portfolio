


import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MovingText from './components/MovingText';
import Eyes from './components/Eyes';
import Impossible from './components/Impossible';
import LocomotiveScroll from 'locomotive-scroll';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';


function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="bg-black overflow-hidden">
         <Navbar/>
        <Home/>
        <Aboutme/>
        <Impossible/>
        
        <Eyes/>
        <Contact/> 
      </div>
    </>
  );
}

export default App;

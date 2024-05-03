import React, { useState } from 'react';
import { auth, provider, gitProvider, facebookProvider } from "./Firebaseconfig";
import { signInWithPopup } from 'firebase/auth';
import Appclone from './Appclone';
import "./Signin.css";
import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

function App() {
  const [value, setValue] = useState('');

  const handleGClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setValue(result.user.email);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const handleFaceClick = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      setValue(result.user.email);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGitClick = async () => {
    try {
      const result = await signInWithPopup(auth, gitProvider);
      setValue(result.user.email);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {value ? <Appclone /> : 
      <div className="signin-container">
        <div className="container-signin">
          <div className="heading-text">
            <h1>FOR SECURITY PURPOSE PLEASE SIGNIN</h1>
          </div>
          <div className="social-login">
            <button onClick={handleGClick}> <FaGoogle /></button>
            <button onClick={handleGitClick}><IoLogoGithub /></button>
            <button className='facebook' onClick={handleFaceClick}><FaFacebook /></button>
          </div>
        </div>
      </div>
      }
    </>
  );
}

export default App;

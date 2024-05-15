import React, { useState } from 'react';
import { auth, provider, gitProvider} from "./Firebaseconfig";
import { signInWithPopup } from 'firebase/auth';
import Appclone from './Appclone';
import "./Signin.css";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";

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
              <button onClick={handleGitClick}><IoLogoGithub /></button>
            <button onClick={handleGClick}> <FcGoogle /> </button>
          </div>
        </div>
      </div>
      }
    </>
  );
}

export default App;

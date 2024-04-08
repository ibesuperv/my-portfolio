import React, { useEffect } from "react";
import "./notesholder.css";
import Header from "./Header";
import Notes from "./Notes";

function NotesHolder() {

  useEffect(

    ()=>{
      document.title="Notes"
    }
  )
  return (
    <div className="h-body">
    <div className="main">
      <Header />
      <Notes />
    </div>
    </div>
  );
}

export default NotesHolder;

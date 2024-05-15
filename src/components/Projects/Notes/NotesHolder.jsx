import React, { useEffect } from "react";
import "./notesholder.css";
import ProjectsMenu from "../Portfolio/Menu/ProjectsMenu";
import Notes from "./Notes";

function NotesHolder() {
  useEffect(() => {
    document.title = "Notes";
  }, []);

  return (
    <div className="h-body">
      <ProjectsMenu />
      <div className="main">
        <Notes />
      </div>
    </div>
  );
}

export default NotesHolder;

import React from "react";
import { Link } from "react-router-dom";
import "./projectStyle.css";

const ProjectsMenu = () => {
  return (
    <header className="header">
      <h3 className="logo">
        <span className="text-red-500">i</span>
        <span className="label--nav-open">besuperv</span>
      </h3>
      <div className="wrap">
        <h3 className="logo">
        <Link className="span menu label--nav-closed text-white" to="/">
          HOME
        </Link>
          </h3>
      </div>
    </header>
  );
};

export default ProjectsMenu;

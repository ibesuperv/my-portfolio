import React from "react";
import { Link } from "react-router-dom";
import "../portfolio.css";

const ProjectsMenu = () => {
  return (
    <header className="header">
      <h3 className="logo">
        <span className="text-red-500">i</span>
        <span className="label--nav-open">besuperv</span>
      </h3>
      <div className="wrap">
        <button
          className="button relative h-30px cursor-pointer nav-button"
          type="button"
          aria-label="Toggle Navigation"
        >
          <span className="span menu label--nav-closed">
            <Link className="text-white" to="/">HOME</Link>
          </span>
        </button>
      </div>
    </header>
  );
};

export default ProjectsMenu;

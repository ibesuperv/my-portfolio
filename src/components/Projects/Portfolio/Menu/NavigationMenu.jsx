import React from 'react';


const NavigationMenu = ({ navOpen, navIsAnimating, closeNav }) => {
  const classes = `${navOpen ? ' active' : ''}${navIsAnimating ? ' is-animating' : ''}`;

  const handleLinkClick = () => {
    if (navOpen) {
      closeNav();
    }
  };

  return (
    <div className={`w-full h-screen fixed bg-white navigation-menu${classes}`}>
      <div className="wrap mt-20 bg-transparent">
        <div className="cols w-full flex">
          <div className="col w-1/2 flex-1 col-left col-links">
            <ul className="links">
              <li className="link">
                <a href="#hero" onClick={handleLinkClick}>Home</a>
              </li>
              <li className="link">
                <a href="#about" onClick={handleLinkClick}>About</a>
              </li>
              <li className="link">
                <a href="#contact" onClick={handleLinkClick}>Contact</a>
              </li>
              <li className="link">
                <a href="#projects" onClick={handleLinkClick}>Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;

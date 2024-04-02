
import React, { useState} from 'react';
import "../App.css"
import Header from "./Menu/Header";
import NavigationMenu from "./Menu/NavigationMenu";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [navIsAnimating, setNavIsAnimating] = useState(false);

  const toggleNav = (event) => {
    event.preventDefault();
    const newNavOpen = !navOpen;
    setNavIsAnimating(true);
    document.body.classList.toggle('nav-open', newNavOpen);
    setTimeout(() => {
      setNavIsAnimating(false);
      setNavOpen(newNavOpen);
    }, 500);
  };

  const closeNav = () => {
    document.body.classList.remove('nav-open');
    setNavOpen(false);
  };

  return (
    <div className="layout">
      <Header
        navOpen={navOpen}
        toggleNavHandler={(event) => toggleNav(event)}
        navIsAnimating={navIsAnimating}
      />
      <NavigationMenu
        navOpen={navOpen}
        navIsAnimating={navIsAnimating}
        closeNav={() => closeNav()}
      />
    </div>
  );
};

export default Navbar;

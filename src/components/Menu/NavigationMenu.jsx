
const NavigationMenu = ({ navOpen, navIsAnimating }) => {
  const classes = `${navOpen ? ' active' : ''}${navIsAnimating ? ' is-animating' : ''}`;

  return (
    <div className={`w-full h-screen fixed bg-white navigation-menu${classes}`}>
      <div className="wrap mt-20 bg-transparent">
        <div className="cols w-full flex">
          <div className="col w-1/2 flex-1 col-left col-links">
            <ul className="links ">
              <li className="link">
                <a
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="link">
                <a
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="link">
                <a
                  href="#"
                >
                  Contact
                </a>
              </li>
              <li className="link">
                <a
                  href="#"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    
  );
};

export default NavigationMenu
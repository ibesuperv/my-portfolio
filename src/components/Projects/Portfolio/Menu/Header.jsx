import "../portfolio.css"


const Header = ({ navOpen, navIsAnimating, toggleNavHandler }) => {
  
    return (
      <header className="header">
          <h3 className='logo'>
            <span className='text-red-500 '>i</span><span className={`label--nav-open${navOpen ? ' text-black' : ''}`}>besuperv</span>
          </h3>
        <div className="wrap">
          <button
            className={`button relative h-30px cursor-pointer nav-button${navIsAnimating ? ' is-animating' : ''}`}
            type="button"
            aria-label="Toggle Navigation"
            onClick={(event) => toggleNavHandler(event)}
          >
            <span className={`span menu label--nav-closed${!navOpen ? ' active' : ''}`}>MENU</span>
            <span className={`span label--nav-open${navOpen ? ' active text-black' : ''}`}>Close</span>
          </button>
        </div>
      </header>
    );
  };
export default Header;  
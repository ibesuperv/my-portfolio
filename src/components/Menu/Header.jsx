
const Header = ({ navOpen, navIsAnimating, toggleNavHandler }) => {
  
    return (
      <header className="w-full pt-6 fixed header flex justify-around z-10">
          <h3 className={` px-20 text-white text-4xl cursor-pointer label--nav-open${navOpen ? ' active text-black' : ''}`}>
            <span className='text-red-500 '>i</span>besuperv
          </h3>
        <div className="wrap">
          <button
            className={`relative h-30px cursor-pointer nav-button${navIsAnimating ? ' is-animating' : ''}`}
            type="button"
            aria-label="Toggle Navigation"
            onClick={(event) => toggleNavHandler(event)}
          >
            <span className={`text-white label--nav-closed${!navOpen ? ' active' : ''}`}>MENU</span>
            <span className={`label--nav-open${navOpen ? ' active text-black' : ''}`}>Close</span>
          </button>
        </div>
      </header>
    );
  };
export default Header;  
import React, { useEffect, useState } from 'react';
import CountriesCard from './CountriesCard';
import DotLoader from 'react-spinners/DotLoader'; 
import ProjectsMenu from "../Portfolio/Menu/ProjectsMenu";

function CountriesHeader() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    document.title = "Countries";
  }, []);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json(); // Changed "let" to "const" for data
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(data);
        setLoading(false); 
      } catch (error) {
        console.log(error);
      }
    };
    getCountries();
  }, []);

  const searchCountry = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${search}`);
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchCountry();
  };

  return (
    <>
      <section className='main-c-holder'>
        <ProjectsMenu/>
        <div className="search">
          <form autoComplete='off' onSubmit={handleSearch} className='searchform'>
            <input
              type="text"
              name="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              id="search"
              placeholder='Search the Country'
              className='searchbar'
              required
            />
          </form>
        </div>

        <div className="cs-cards">
          {loading ? ( 
            <div className='spinner'>
              <DotLoader color='#fff' size={100} />
            </div>
          ) : (
            countries.map((country) => (
              <CountriesCard key={country.name.common} {...country} />
            ))
          )}
        </div>
      </section>
    </>
  );
}

export default CountriesHeader;

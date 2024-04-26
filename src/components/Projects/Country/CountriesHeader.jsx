import React, { useEffect, useState } from 'react';
import CountriesCard from './CountriesCard';
import Navbar from '../Portfolio/Navbar';


function CountriesHeader() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(()=>{
    document.title="Countries";
  })

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        let data = await res.json();
        // Sort countries alphabetically based on name.common
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(data);
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
      {!countries ? (
        <h1 className='text-white font-bold uppercase flex items-center justify-center text-center h-screen text-4xl'>Loading</h1>
      ) : (
        <Navbar />
        <section className='main-c-holder'>
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
            {countries.map((country) => (
              <CountriesCard key={country.name.common} {...country} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default CountriesHeader;

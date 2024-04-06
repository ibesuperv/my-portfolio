import React, { useEffect, useState } from 'react';
import CountriesCard from './CountriesCard';

function CountriesHeader() {
  const [countries, setCountries] = useState([]);
  const regions = [
    { name: "Asia" },
    { name: "Africa" },
    { name: "America" },
    { name: "Antarctic" },
    { name: "Oceania" },
    { name: "Europe" },
  ];
  const [search, setSearch] = useState('');

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

  const searchFilter = async (region) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
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

  const handleRegion = (e) => {
    e.preventDefault();
    searchFilter();
  };

  return (
    <>
      {!countries ? (
        <h1 className='text-gray-800 font-bold uppercase flex items-center justify-center text-center h-screen text-4xl'>Loading</h1>
      ) : (
        <section className='mx:auto p-10 w-auto h-auto'>
          <div className="search flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <form autoComplete='off' onSubmit={handleSearch} className='max-w-4xl md:flex-1 mb-10'>
              <input
                type="text"
                name="search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                id="search"
                placeholder='Search the Country'
                className='py-2 px-4 placeholder-gray-800 w-full shadow rounded outline-none'
                required
              />
            </form>
            <form className='md:flex-2' onSubmit={handleRegion} value={regions.name} onChange={e => searchFilter(e.target.value)}>
              <select className='w-52 py-3 px-4 outline-none shadow rounded mb-10' name="filter-by-region" id="filter-by-region">
                {regions.map((region, index) => (
                  <option key={index} value={region.name}>{region.name}</option>
                ))}
              </select>
            </form>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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

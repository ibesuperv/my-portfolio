import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function CountriesCard({ flags, name, population, region, subregion }) {
  const encodedName = encodeURIComponent(name.common);

  return (
    <>
      <Link to={`/country/${encodedName}`}>
        <article className='card transition-all duration-200'>
          <img src={flags.svg} alt={name.common} className='w-full' />
          <h2 className='font'>{name.common}</h2>
          <div className=''>
            <ul className=''>
              <li>Population : {population.toLocaleString()}</li>
              <li>Region : {region}</li>
              <li>Subregion : {subregion}</li>
            </ul>
          </div>
        </article>
      </Link>
    </>
  );
}

export default CountriesCard;

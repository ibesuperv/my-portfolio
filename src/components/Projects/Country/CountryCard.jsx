import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.css';
import ProjectsMenu from '../Portfolio/Menu/ProjectsMenu';

function CountryCard() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    document.title = `Country | ${name}`;
    const getCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await response.json();
        setCountry(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCountry();
  }, [name]);

  return (
    <div className="h-screen w-full bg-black">
      <ProjectsMenu />
      <section className="c-cards">
        {country.map((item) => (
          <div key={item.population} className="s-card">
            <article className="flag">
              <img src={item.flags.svg} alt={item.name.common} />
            </article>
            <article className="c-details">
              <h1>{item.name.official}</h1>
              <ul className="c-d-card">
                <li>Capital: {item.capital[0]}</li>
                <li>Population: {item.population.toLocaleString()}</li>
                <li>Region: {item.region}</li>
                <li>Subregion: {item.subregion}</li>
              </ul>
              {item.borders && (
                <>
                  <h3>Borders:</h3>
                  <ul className="borders">
                    {item.borders.map((border, index) => (
                      <li key={index}>{border}</li>
                    ))}
                  </ul>
                </>
              )}
              <Link
                to="/country"
                className="btn hover:bg-black hover:text-white hover:border-2 border-2 hover:border-white transition-all duration-200"
              >
                &larr; Back
              </Link>
            </article>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CountryCard;

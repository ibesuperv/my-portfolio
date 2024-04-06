import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function CountryCard() {
    const [country, setCountry] = useState([]);
    const { name } = useParams()
    useEffect(
        () => {
document.title="PROJECT | COUNTRIES";
            const getCountry = async () => {
                try {
                    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
                    const data = await response.json();
                    setCountry(data);

                }
                catch (error) {
                    console.log(error)

                }
            }
            getCountry();

        }, [name]
    )
    return (
        <>
            <section className='p-8 md:py-0 md:py-0 mx-auto '>
                {
                    country.map((item) => (
                        <div key={item.population} className='grid grid-cols-1  gao-8 md:grid-cols-2 md:place-items-center md:h-screen'>

                            <article>
                                <img src={item.flags.svg} alt={item.name.common} />
                            </article>
                            <article>
                                <h1 className='font-bold text-4xl lg:text-6xl mb-5 text-white pt-5'>{item.name.official}</h1>
                                <ul className='mt-4 flex flex-col items-start justify-start gap-2 text-slate-300'>
                                <li>Capital : {item.capital[0]}</li>

                                    <li>Population : {item.population.toLocaleString()}</li>
                                    <li>Region : {item.region}</li>
                                    <li>Subregion : {item.subregion}</li>
                                </ul>
                                {  item.borders &&  (<>
                                <h3 className='font-bold text-lg mb-2'>Borders : </h3>
                                <ul className='flex  gap-4'>
                                    {item.borders.map((border,index)=>(
                                        <li key={index} className='bg-grey-300 p-2 rounded text-xs tracking-wide shadow'>{border}</li>
                                    ))}
                                </ul>
                                </>)}
                                <Link to="/" className='inline-block mt-8 py-2 px-6 rounded shadow bg-white hover:bg-black hover:text-white hover:border-2 border-2 hover:border-white transition-all duration-200 ' > &larr; Back</Link>
                            </article>
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default CountryCard
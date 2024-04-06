import React from 'react'
import { Link } from 'react-router-dom'

function CountriesCard({flags,name, population, region,subregion}) {
  return (
    <>
    <Link to={`/${name.common}`}>
    <article className='rounded-lg shadow overflow-hidden bg-zinc-100 hover:bg-slate-200 hover:scale-105 transition-all duration-200 '>
        <img src={flags.svg} alt={name.common} className='md:h-64 w-full'/>
        <h2 className='font-bold text-lg pl-5 text-gray-900 mb-2'>{name.common}</h2>
        <div className="pl-7 pb-9">
        <ul className='flex flex-col items-start justify-start gap-2'>
            <li>Population : {population.toLocaleString()}</li>
            <li>Region : {region}</li>
            <li>Subregion : {subregion}</li>
        </ul>
        </div>
    </article>
    </Link>
    
    </>
  )
}

export default CountriesCard
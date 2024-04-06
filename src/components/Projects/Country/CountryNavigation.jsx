import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CountriesHeader from './CountriesHeader'
import CountryCard from './CountryCard'
import Navbar from '../Portfolio/Navbar'

function CountryNavigation() {
  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<CountriesHeader/>}></Route>
        <Route path='/:name' element={<CountryCard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default CountryNavigation
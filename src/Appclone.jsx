import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioHolder from './components/PortfolioHolder';
import Loading from './components/Loading';
import CountryCard from './components/Projects/Country/CountryCard';
import CountriesHeader from './components/Projects/Country/CountriesHeader';
import LocomotiveScroll from 'locomotive-scroll';
import NotesHolder from './components/Projects/Notes/NotesHolder';
import NotFoundPage from './NotFoundPage';


function Appclone() {
  const [isLoading, setIsLoading] = useState(true);
  const locomotiveScroll = new LocomotiveScroll;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className='w-full cursor-auto'>
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<PortfolioHolder />} />
            <Route path="/country" element={<CountriesHeader />} />
            <Route path="/country/:name" element={<CountryCard />} />
            <Route path="/notes" element={<NotesHolder />} />
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>


        </Router>
      )}
      
    </div>
  );
}

export default Appclone;

import React, { useEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import About from '../components/Pages/Main';
import Team from '../components/Team/Main';
import Teamdeatils from '../components/Teamdetails/Main';
import Faqs from '../components/Faq/Main';
import Error from '../components/Error/Main';
import Insurance from '../components/Insurance/Main';
import Insurancedeatils from '../components/Insurancesdetails/Main';
import Portfolio from '../components/Portfolio/Main';
import Portfoliodetails from '../components/Portfoliodetails/Main';
import Contact from '../components/Contact/Main';
import Homethree from '../components/Home/Main';

function Index() {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    window.scroll(0, 0);
  }, [path]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homethree />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/teamdetails" element={<Teamdeatils />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/error" element={<Error />} />
        <Route path="/insurances" element={<Insurance />} />
        <Route path="/insurancesdetails" element={<Insurancedeatils />} />
        <Route path="/portfoliogrid" element={<Portfolio />} />
        <Route path="/portfoliodetails" element={<Portfoliodetails />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Catch-all route for unknown paths */}
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </>
  );
}

export default Index;

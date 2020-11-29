import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import Features from './partials/Features';
import AgenciesSection from './partials/AgenciesSection';
import Cta from '../components/sections/Cta';

const Home = () => {
 
  return (
    <>
      <Hero className="illustration-section-01" />
      <Features invertMobile imageFill className="illustration-section-02" />
      <AgenciesSection invertMobile imageFill className="illustration-section-01" />
      <Cta split />
    </>
  );
}

export default Home;
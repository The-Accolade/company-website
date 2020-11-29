import React from 'react';
import Features from './partials/Features';
import AgenciesSection from './partials/AgenciesSection';
import Mandate from './partials/Mandate';

const About = () => {
  return (
    <section>
      {/* styling contained in scss/themes/section/hero.scss */}
      <div className="about-section">
        <h2 className="title">About us</h2>
      </div>
      <Features />
      <div className="about-container-1" >
        <AgenciesSection />
      </div>
      <div className="about-container-2" >
        <Mandate/>
      </div>
    </section>
  );
};

export default About;

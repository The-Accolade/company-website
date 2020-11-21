import React from 'react';
import FeaturesSplit from '../components/sections/FeaturesSplit';

const About = () => {
  return (
    <section>
      {/* styling contained in scss/themes/section/hero.scss */}
      <div className="about-section"> 
        <h2 className="title">About us</h2>
      </div>
      <FeaturesSplit
        invertMobile
        // topDivider
        imageFill
        className="illustration-section-02"
      />
    </section>
  );
};

export default About;

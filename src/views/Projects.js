import React from 'react';
import Testimonial from '../components/sections/Testimonial';

const Projects = () => {
  return (
    <section>
      <div className="project-section">
        <h2 className="title">Our Projects</h2>
      </div>
      <div className="project-section__body">
        <div className="row">
          <div class="column">
            <div class="feature-box">
              <h3 class="heading">
                Explore the world
              </h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                at perspiciatis.
              </p>
            </div>
          </div>
          <div class="column">
            <div class="feature-box">
              <h3 class="heading">
                Explore the world
              </h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                at perspiciatis.
              </p>
            </div>
          </div>
          <div class="column">
            <div class="feature-box">
              <h3 class="heading">
                Explore the world
              </h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                at perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Testimonial topDivider />
    </section>
  );
};

export default Projects;

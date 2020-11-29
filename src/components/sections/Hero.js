import React from 'react';
// import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
//import pictures
import Governor from "../.././assets/pictures/Governor's Picture.png";
import GovernorVisit from '../.././assets/pictures/Governor visit.png';
import GroupPicture from '../.././assets/pictures/Group Picture with Governor and Deputy.png';

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content spacer-24">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Update on the
              <span className="text-color-primary">
                {' '}
                Planned, Ongoining, Completed Projects and Activities
              </span>
            </h1>
            <div className="container-xs spacer-24">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                Of the Office of the Special Adviser on Education
              </p>
              <p
                className="m-0 mb-32 reveal-from-bottom spacer-12 hero-content-title"
                data-reveal-delay="2000"
              >
                In Commemoration of Governor Babajide Sanwo-Olu’s 500 Days
                in Office
              </p>
              <div className="reveal-from-bottom spacer-12" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="#0">
                    Read Address
                  </Button>
                  <Button tag="a" color="dark" wideMobile href="#0">
                    Make Enquiries
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            id="carouselFade"
            className="carousel slide carousel-fade has-shadow hero-figure reveal-from-bottom illustration-element-01"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-interval="3500">
                <img src={Governor} className="d-block w-100" alt="Lagos 1" />
              </div>
              <div className="carousel-item" data-interval="3500">
                <img
                  src={GroupPicture}
                  className="d-block w-100"
                  alt="Lagos 2"
                />
              </div>
              <div className="carousel-item" data-interval="3500">
                <img
                  src={GovernorVisit}
                  className="d-block w-100"
                  alt="Lagos 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;

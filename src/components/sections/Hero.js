import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

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
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Welcome to the{' '}
              <span className="text-color-primary">Ministry of Justice</span>{' '}
              Online!
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                Read the welcome address by{' '}
                <Link to="#0"> Justice Ngozi Emehelu </Link>
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
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
                <img
                  src="https://i0.wp.com/cdn.vanguardngr.com/wp-content/uploads/2019/05/2-1024x527.jpg?resize=640%2C329&ssl=1"
                  className="d-block w-100"
                  alt="Enugu 1"
                />
              </div>
              <div className="carousel-item" data-interval="3500">
                <img
                  src="https://www.enugustate.gov.ng/wp-content/uploads/2016/12/15202509_368219446854960_825447671159671573_n.jpg"
                  className="d-block w-100"
                  alt="Enugu 2"
                />
              </div>
              <div className="carousel-item" data-interval="3500">
                <img
                  src="https://i2.wp.com/www.naijiant.com/naijiant_uploads/2016/04/ENUGU-STATE-JUDICIARY-2.jpg?fit=1024%2C685&ssl=1"
                  className="d-block w-100"
                  alt="Enugu 3"
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

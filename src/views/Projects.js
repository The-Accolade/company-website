import React from 'react';
import { SectionSplitProps } from '.././utils/SectionProps';
import classNames from 'classnames';
//import images
import ProjectOne from '../assets/pictures/Project Picture One.png';
import ProjectTwo from '../assets/pictures/Project Picture Two.png';
// import GroupIcon from '../assets/pictures/Group Icon.png';
import Seminar from '../assets/pictures/Project Seminar.png';
import Project from '../assets/pictures/Lagos Project.png';
import CodeLagos from '../assets/pictures/Code Lagos.png';
import python from '../assets/pictures/python.png';
import scratch from '../assets/pictures/scratch.png';
import greenfoot from '../assets/pictures/Greenfoot.png';
import alice from '../assets/pictures/Alice.png';
import ICT from '../assets/pictures/ICT.png';
import School1 from '../assets/pictures/School Logo 1.png';
import School2 from '../assets/pictures/School Logo 2.png';
import School3 from '../assets/pictures/School Logo 3.png';
import School4 from '../assets/pictures/School Logo 4.png';
import School5 from '../assets/pictures/School Logo 5.png';
import School6 from '../assets/pictures/School Logo 6.png';
import Michigian from '../assets/pictures/Michigian.png';
import Signing from '../assets/pictures/Signing.png';
import Building from '../assets/pictures/Building Project.png';
import Convocation from '../assets/pictures/Convocation.png';
import Convocation2 from '../assets/pictures/Mocped Convo.png';
import CBT1 from '../assets/pictures/CBT 1.png';
import CBT2 from '../assets/pictures/CBT 2.png';
import metillelu from '../assets/pictures/metillelu.png';
import Mass from '../assets/pictures/Mass Education.png';

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const Projects = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

  return (
    <section {...props} className={outerClasses}>
      <div className="project-section">
        <h2 className="title">Our Projects</h2>
      </div>
      <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <img
                    src={ProjectOne}
                    alt="project one"
                    className="column-image"
                  />
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <img
                    src={ProjectTwo}
                    alt="project two"
                    className="column-image"
                  />
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="h2 mb-32">20</p>

                  <p className="text-sm mb-0">
                    Libraries and ICT centers were renovated across Secondary
                    Schools across the IV Education District
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12 feature-title">
                  <div>
                    <span className="line"></span>
                    <span>
                      Student Improvement Programmes in Tertiary Institutions
                    </span>{' '}
                  </div>
                </h3>
              </div>

              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
              >
                <img
                  //className="projects-title-section-2-image"
                  src={Project}
                  alt="project"
                />
                <div>
                  <img
                    //className="projects-title-section-2-image widen"
                    src={Seminar}
                    alt="seminar"
                  />
                </div>
              </div>
            </div>
            <div className="testimonial-item-footer h2 mt-32 mb-0 has-top-divider">
              <span className="testimonial-item-name text-color-dark">1</span>
              <span className="text-color-low"> / </span>
              <span className="testimonial-item">
                We launched the 4.0 edition of <strong>Ready-set-Work</strong>{' '}
                Programme for final year students
              </span>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <img
                  className="code-lagos-section-left-image"
                  src={CodeLagos}
                  alt="code lagos"
                />
                <h3 className="mt-0 mb-12">
                  {' '}
                  An initiative to make coding curriculum accessible to every
                  student in Lagos State.
                </h3>

                <div className="code-lagos-section-left-bottom m-0">
                  <div className="code-lagos-section-left-bottom-left">
                    Skills include:
                  </div>
                  <div className="code-lagos-section-left-bottom-right">
                    <img
                      className="code-lagos-section-left-bottom-right-image"
                      src={python}
                      alt="python"
                    />
                    <img
                      className="code-lagos-section-left-bottom-right-image"
                      src={scratch}
                      alt="scratch"
                    />
                    <img
                      className="code-lagos-section-left-bottom-right-image"
                      src={greenfoot}
                      alt="greenfoot"
                    />
                    <img
                      className="code-lagos-section-left-bottom-right-image"
                      src={alice}
                      alt="alice"
                    />
                  </div>
                </div>
              </div>
              <div
                className="split-item-image spacer-32 center-content-mobile reveal-from-bottom code-lagos-section-right"
                data-reveal-container=".split-item"
              >
                <div className="code-lagos-section-right-top">
                  <span className="code-lagos-section-right-top-head">
                    100,000+
                  </span>
                  <span className="code-lagos-section-right-top-body">
                    Students Trained
                  </span>
                </div>
                <div className="code-lagos-section-right-middle">
                  <span className="code-lagos-section-right-top-head">656</span>
                  <span className="code-lagos-section-right-top-body">
                    Public/ Private Schools Covered
                  </span>
                </div>
                <div className="code-lagos-section-right-bottom">
                  Primary & Secondary Schools
                </div>
              </div>
            </div>

            <div className="split-item">
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
              >
                <img src={ICT} alt="e-learning" />
              </div>
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">
                  Approved E-learning Infrastructure for State-owned Tertiary
                  Institutions
                </h3>
                <div className="text-sm text-color-primary fw-600 tt-u mb-32">
                  Caused by Covid-19 pandemic as a mitigation strategy
                </div>

                <div className="e-learning-section">
                  <div className="e-learning-section-left">
                    <img
                      src={School1}
                      className="e-learning-section-left-img"
                      alt="school1"
                    />
                    <img
                      src={School2}
                      className="e-learning-section-left-img"
                      alt="school2"
                    />
                    <img
                      src={School3}
                      className="e-learning-section-left-img"
                      alt="school3"
                    />
                    <img
                      src={School4}
                      className="e-learning-section-left-img"
                      alt="school4"
                    />
                    <img
                      src={School5}
                      className="e-learning-section-left-img"
                      alt="school5"
                    />
                    <img
                      src={School6}
                      className="e-learning-section-left-img"
                      alt="school6"
                    />
                  </div>
                  <div className="e-learning-section-right">
                    <span className="e-learning-section-right-title h2 mb-0">
                      1st
                    </span>
                    <span className="e-learning-section-right-body">
                      State in Nigeria to achieve this feat
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="split-item tertiary-section ">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12 feature-title">
                  <div>
                    <span>
                      Improved State Tertiary Institutions through
                      Infrastructure & Capacity Building
                    </span>{' '}
                  </div>
                </h3>
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div> */}
                <h3 className="mt-0 mb-12">
                  Michigan University enters an exchange, joint research work,
                  field work, data collection and analysis programme
                </h3>
                <p className="m-0">
                  Also involved are: Cape Town University, SA, Egerton
                  University Kenya. University of Sierra Leone, SL.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
              >
                <img src={Michigian} alt="michigian" />
                <img src={School4} alt="Lasu" />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">
                  We signed an agreement with investors for proposed LASU
                  <strong> 8,272-unit</strong> hostel.
                </h3>
                <p className="m-0">
                  Stakeholders meeting on LASU land encroachment
                </p>
                <h3 className="mt-0 mb-12">
                  LASU created a technology capable of monitoring Carbon
                  Monoxide emission level in vehicles
                </h3>
                <div className="flex">
                  <h3>
                    Admitted 2,000 more students for Stream 2 admission exercise
                  </h3>
                  <span className="mt-4">
                    <img src={School4} alt="signing" width="500" />
                  </span>
                </div>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
              >
                <div>
                  <img src={Signing} alt="signing" />
                </div>
              </div>
            </div>

            <div className="center-content-mobile reveal-from-bottom">
              <img
                className="split-item-image building-section"
                src={Building}
                alt="Building"
              />
            </div>

            <div
              className="center-content-mobile reveal-from-bottom"
              data-reveal-delay="200"
            >
              <img
                className="split-item-image building-section"
                src={Convocation}
                alt="Building"
              />
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <div className="flex">
                    <span className="m-16 pt-32">
                      <img src={School4} width="100" alt="lasu" />
                    </span>
                    <h3>
                      Lagos State University <strong>(LASU)</strong>
                    </h3>
                  </div>
                  <div
                    className="split-item-image center-content-mobile reveal-from-bottom split-item-image-fill"
                    data-reveal-container=".split-item"
                  >
                    <img src={CBT2} alt="cbt" />
                  </div>
                </div>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
              >
                <img src={CBT1} alt="cbt" />
                <h3>
                  Constructed a 500-seater CBT center at LASU in partnership
                  with Private organizations
                </h3>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="flex">
                  <h3 className="mt-0 mb-12">
                    Lagos State Polytechnic <strong>(LASPOTECH)</strong>
                  </h3>
                  <img
                    className="'split-item-image center-content-mobile"
                    src={School5}
                    width="100"
                    alt="cbt"
                  />
                </div>
                <div className="mt-16">
                  {' '}
                  _ Commenced the <strong> HND Top–Up</strong> programme.
                </div>
                <div className="mt-16">
                  _ Commenced the installation of a Power Substation
                </div>
                <div className="mt-16">
                  {' '}
                  _ Ongoing Plans to replicate the same hostels as is currently
                  done in LASU
                </div>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
                data-reveal-delay="1000"
              >
                <div className="flex">
                  <img
                    className="mr-12"
                    src={metillelu}
                    width="100"
                    alt="metillelu"
                  />
                  <div>
                    <h3 className="mt-36">
                      Appointed Mr. METILLELU, Olumide Olusola as the Acting
                      Rector
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="flex">
                  <h3 className="mt-2 mr-4 mb-12 text-color-primary">
                    1st Position
                  </h3>
                  <p className="m-2 pr-5 h3">
                    Y2019 <strong> i-Creat Skills </strong>Festival emerged
                  </p>
                </div>
                <div className="flex">
                  <h3 className="mt-2 mr-4 mb-12 text-color-primary">
                    2nd Position
                  </h3>
                  <p className="m-2 pr-5 h3">
                    Y2020 Nigerian Polytechnic Games emerged
                  </p>
                </div>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
              >
                <h3 className="mt-2 mr-4 mb-12 text-color-primary">
                  Released funds for the construction of the following:
                </h3>
                <ul>
                  <li>Perimeter Fence</li>
                  <li>Administration Building</li>
                  <li>And equipping the fire station</li>
                </ul>
              </div>
            </div>

            <div className="split-item">
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
              >
                <img className="building-section" src={School2} alt="aocoed" />
                <h3 className="mt-2 pr-12 mb-12">
                  Adeniran Ogunsanya College of Education (AOCOED)
                </h3>
              </div>
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="flex">
                  <h3 className="mt-0 mb-12 mr-4">1</h3>
                  <p className="m-0">
                    Appointment of <strong>Professor Bililkis Idowu</strong> as
                    the new Provost of AOCOED.
                  </p>
                </div>
                <div className="flex">
                  <h3 className="mt-0 mb-12 mr-4">2</h3>
                  <p className="m-0">
                    Release of <strong>N350 million</strong> bailout for
                    personnel cost and
                  </p>
                </div>
                <div className="flex">
                  <h3 className="mt-0 mb-12 mr-4">3</h3>
                  <p className="m-0">
                    increased subvention fund by <strong>25%</strong>
                  </p>
                </div>
                <div className="flex">
                  <h3 className="mt-0 mb-12 mr-4">4</h3>
                  <p className="m-0">
                    Graded un-tarred roads in the college to ease accessibility
                  </p>
                </div>
              </div>
            </div>

            <div className="split-item">
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
              >
                <img
                  className="building-section"
                  src={School3}
                  alt="School 1"
                />
                <h3 className="mt-2 pr-12 mb-12">
                  Michael Otedola College of Primary Education (MOCPED)
                </h3>
              </div>
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <ul>
                  <li className="m-0 p-2">
                    Paid gratuities and 14 years pension arrears
                  </li>
                  <li className="m-0 p-2">
                    Upgraded infrastructure & provided furniture
                  </li>
                  <li className="m-0 p-2">
                    Graduated the first batch of students of the University of
                    Ibadan afflation progamme with two{' '}
                    <strong>1st-class </strong>graduates
                  </li>
                  <li className="m-0 p-2">
                    Released <strong> N200m</strong> Bailout fund to pay
                    retirees.
                  </li>
                  <li className="m-0 p-2">
                    Revalidated the <strong>460-seater </strong>auditorium
                  </li>
                </ul>
              </div>
            </div>

            <div className="center-content-mobile reveal-from-bottom">
              <img
                className="split-item-image building-section"
                src={Convocation2}
                alt="Building"
              />
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="flex mb-12">
                  <h3 className="mt-0  mr-4">1</h3>
                  <p className="m-0">
                    Commenced <strong>sign language</strong> in the classroom
                  </p>
                </div>
                <div className="flex mb-12">
                  <h3 className="mt-0  mr-4">2</h3>
                  <p className="m-0">
                    Implemented e-Learning infrastructure & web-based result
                    processing software
                  </p>
                </div>
                <div className="flex mb-12">
                  <h3 className="mt-0 mr-4">3</h3>
                  <p className="m-0">
                    <strong> Newly Accredited courses</strong>
                    <ul>
                      <li>Health Information Mgt</li>
                      <li>Pharmacy Technician / Pharmaceutical Technologist</li>
                      <li>Environmental Health Tech;</li>
                      <li>Community Health Science.</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
              >
                <img src={School1} alt="LSCHT" className="building-section" />
                <h3 className="mt-0 mb-12">
                  Lagos State School of Health Technology
                </h3>
                <div className="flex">
                  <h3 className="mt-0 mb-12 mr-4">4</h3>
                  <p className="m-0">
                    <span>
                      {' '}
                      <strong>Approved for construction & Commencement:</strong>
                    </span>
                    <ul>
                      <li>Pavement Interlocking</li>
                      <li>Laboratory</li>
                      <li>e-Library</li>
                      <li>Library</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div className={tilesClasses}>
              <div
                className="split-item-image center-content-mobile reveal-from-bottom"
                data-reveal-delay="600"
              >
                <h3 className="mt-0 mb-12">
                  Lagos State College of Nursing, Midwifery and Public Health
                  Nursing (LASCON)
                </h3>
              </div>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay="200"
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-content">
                    <div className="features-tiles-item-header">
                      <h2 className="mt-0 mb-8">1</h2>
                    </div>
                    <p className="m-0 text-sm has-top-divider">
                      Both departments admitted <strong>70 students</strong> in
                      2019 & 2020.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay="200"
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-content">
                    <div className="features-tiles-item-header">
                      <h2 className="mt-0 mb-8">2</h2>
                    </div>
                    <p className="m-0 text-sm has-top-divider">
                      Both departments graduated <strong>67 students</strong> in
                      the year 2019
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay="200"
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-content">
                    <div className="features-tiles-item-header">
                      <h2 className="mt-0 mb-8">3</h2>
                    </div>
                    <p className="m-0 text-sm has-top-divider">
                      We recorded a <span>100% Pass rate</span> from students
                      who participated in the National qualifying exams
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay="200"
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-content">
                    <div className="features-tiles-item-header">
                      <h2 className="mt-0 mb-8">4</h2>
                    </div>
                    <p className="m-0 text-sm has-top-divider">
                      49 students from our school participated in the
                      <strong> Ready-Set-Work</strong> Programme
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={tilesClasses}>
              <div
                className="split-item-image center-content-mobile reveal-from-bottom"
                data-reveal-delay="600"
              >
                <h3 className="mt-0 mb-12 ">
                  Improvements at the Adult Literacy Education
                </h3>
                <p className="m-0">Thru Agency for Mass Education</p>
              </div>
              <div className={tilesClasses}>
                <div
                  className="tiles-item reveal-from-bottom"
                  data-reveal-delay="200"
                >
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-content">
                      <div className="features-tiles-item-header">
                        <h2 className="mt-0 mb-8">21 Additonal</h2>
                      </div>
                      <p className="m-0 text-sm has-top-divider">
                        Adult literacy Centers making a total of 1,284
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="tiles-item reveal-from-bottom"
                  data-reveal-delay="200"
                >
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-content">
                      <div className="features-tiles-item-header">
                        <h2 className="mt-0 mb-8">2 Additional</h2>
                      </div>
                      <p className="m-0 text-sm has-top-divider">
                        Vocational Centers
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="tiles-item reveal-from-bottom"
                  data-reveal-delay="200"
                >
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-content">
                      <div className="features-tiles-item-header"></div>
                      <p className="m-0 text-sm">
                        49 students from our school participated in the
                        <strong> Ready-Set-Work</strong> Programme
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">
                  Presentation of gifts to winner at the Agency for Mass
                  Education annual quiz competition tagged “Eko Nko Eko"
                </h3>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
              >
                <img src={Mass} alt="Features split 03" />
              </div>
            </div>

            <div className={tilesClasses}>
              <div
                className="split-item-image center-content-mobile reveal-from-bottom"
                data-reveal-delay="600"
              >
                <h3 className="mt-0 mb-12 h1">
                  State Scholarship Board Disbursement
                </h3>

                <div className="split-item">
                  <div
                    className="split-item-content center-content-mobile reveal-from-left"
                    data-reveal-container=".split-item"
                  >
                    <h3 className="mt-0 mb-12 text-color-primary">
                      The sum of N253m was paid as bursary award for 8,246
                      beneficiaries.
                    </h3>
                  </div>
                  <div
                    className="split-item-image center-content-mobile reveal-from-bottom"
                    data-reveal-container=".split-item"
                  >
                    <h3 className="mt-0 mb-12 text-color-primary">
                      The sum of N190m was paid as scholarship awards to 845
                      beneficiary
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = propTypes;
Projects.defaultProps = defaultProps;
export default Projects;

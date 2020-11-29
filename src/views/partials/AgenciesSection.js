import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const AgenciesSection = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
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


  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses + " shift-up"}>

          <h2 className="section-title">Offices and Agencies</h2>

          <div className={splitClasses + ' agencies-container reveal-from-bottom'}  data-reveal-delay="700">
            <div className="agencies-container-main">
              <div className="agencies-container-sub">
                <div className="agencies-container-sub-box">
                  <div className="agencies-container-sub-box-content">Office Of Special Adviser On Education</div>
                  <div className="agencies-container-sub-box-content">Lagos State Scholarship Board</div>
                </div>
                <div className="agencies-container-sub-box">
                  <div className="agencies-container-sub-box-content">
                    Agency For Mass Literacy, Adult & Non-formal Education
                  </div>
                  <div className="agencies-container-sub-box-content">Lagos State Library Board</div>
                </div>
                <div className="agencies-container-sub-box agencies-container-sub-box-content stretch">
                    <div>
                        State Tertiary Institutions
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

AgenciesSection.propTypes = propTypes;
AgenciesSection.defaultProps = defaultProps;

export default AgenciesSection;

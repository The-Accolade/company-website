import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import About from '../../views/About';
import Projects from '../../views/Projects';
import Contact from '../../views/Contact';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.addEventListener('click', clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}
        >
          <img
            src="https://ait.live/wp-content/uploads/2020/03/AIT-NEWS-1-2.png"
            style={{ height: 50 }}
            alt="Enugu State"
          />
          {!hideNav && (
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={classNames('header-nav', isActive && 'is-active')}
              >
                <div className="header-nav-inner">
                  <ul
                    className={classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}
                  >
                    <li>
                      <NavLink to="/" onClick={closeMenu}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" onClick={closeMenu}>
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact" onClick={closeMenu}>
                        Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/projects" onClick={closeMenu}>
                        Projects
                      </NavLink>
                    </li>
                  </ul>
                  <Switch>
                    <Route exact path="/about" render={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/" />
                  </Switch>
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;

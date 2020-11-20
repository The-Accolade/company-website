import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import Navigation from '../elements/Navigation';
// import Logo from './partials/Logo';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../../views/Home';
import About from '../../views/About';
import Documentation from '../../views/Documentation';
import Offices from '../../views/Offices';
import Contact from '../../views/Contact';
import Signup from '../../views/Signup';

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
    <Router>
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
                        <Link to="/" onClick={closeMenu}>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" onClick={closeMenu}>
                          About
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" onClick={closeMenu}>
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link to="/offices" onClick={closeMenu}>
                          Offices
                        </Link>
                      </li>
                      <li>
                        <Link to="/documentation" onClick={closeMenu}>
                          Documentation
                        </Link>
                      </li>
                    </ul>
                    {!hideSignin && (
                      <ul className="list-reset header-nav-right">
                        <li>
                          <Link
                            to="/signup"
                            className="button button-primary button-wide-mobile button-sm"
                            onClick={closeMenu}
                          >
                            Sign up
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                </nav>
              </>
            )}
          </div>
        </div>
      </header>

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/offices" component={Offices} />
        <Route path="/documentation" component={Documentation} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;

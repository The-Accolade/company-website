import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../../views/Home';
import About from '../../views/About';
import Documentation from '../../views/Documentation';
import Offices from '../../views/Offices';
import Contact from '../../views/Contact';
import Signup from '../../views/Signup';

const Navigation = () => {
  return (
    <Router>
      <ul className="list-reset header-nav-right">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/offices">Offices</Link>
        </li>
        <li>
          <Link to="/documentation">Documentation</Link>
        </li>
        <li>
          <Link
            to="/signup"
            className="button button-primary button-wide-mobile button-sm"
          >
            Sign up
          </Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/offices" component={Offices} />
        <Route exact path="/documentation" component={Documentation} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Navigation;

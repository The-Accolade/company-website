import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Projects from './views/Projects';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

const pages = [
  {path: "/", component: Home, exact: true},
  {path: "/about", component: About, exact: true},
  {path: "/contact", component: Contact, exact: true},
  {path: "/projects", component: Projects, exact: true},
]

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          {pages.map((page, id)=>{
            
          return (
        
              <AppRoute 
              exact = {page.exact} 
              path={page.path} 
              component={page.component}
              layout={LayoutDefault}
              />
         
              
              )

          })}
          {/* <AppRoute exact path="/" component={About} layout={LayoutDefault} /> */}
        </Switch>
      )} />
  );
}

export default App;
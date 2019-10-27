import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

// Component
import Navbar from './component/layout/Navbar';
import Media from './component/Media';
import Event from './component/Event';
import Footer from './component/layout/Footer';

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Media} />
          <Route exact path="/my-event" component={Event} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;

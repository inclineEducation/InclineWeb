import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar';
import { Button } from './components/Button';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ContactUs from './components/pages/Contact-Us';
import About from './components/pages/About';
import Accelerator from './components/pages/Accelerator';
import Panels from './components/pages/Panels';
import Mentorship from './components/pages/Mentorship';
import Essentials from './components/pages/Essentials';
import InclineEducation from './components/pages/Incline-Education';
import JoinUs from './components/pages/Join-Us';
import InfoSection from './components/InfoSection/index';

import { homeObjOne, homeObjTwo } from './components/InfoSection/Data';
import Services from './components/Services/index';
import Footer from './components/Footer/index';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/contact-us' exact component={ContactUs} />
          <Route path='/accelerator' exact component={Accelerator} />
          <Route path='/panels' exact component={Panels} />
          <Route path='/mentorship' exact component={Mentorship} />
          <Route path='/essentials' exact component={Essentials} />
          <Route path='/incline-education' exact component={InclineEducation} />
          <Route path='/join-us' exact component={JoinUs} />
        </Switch>
      </Router>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <Footer />
    </div>
  );
}

export default App;

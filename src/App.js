import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components'

import Home from './views/Home/index';
import HowItWorks from './views/HowItWorks/index';
import PastTrials from './views/PastTrials/index';
import LogIn from './views/LogIn/index';
import Search from './views/Search/index';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import './normalize.css';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
    font-family: 'Lato', sans-serif;
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <GlobalStyles />
          <NavBar />
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/pasttrials' component={PastTrials}></Route>
          <Route exact path='/howitworks' component={HowItWorks}></Route>
          <Route exact path='/login' component={LogIn}></Route>
          <Route exact path='/search' component={Search}></Route>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
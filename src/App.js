import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './views/Home';
import HowItWorks from './views/HowItWorks';
import PastTrials from './views/PastTrials';
import LogIn from './views/LogIn';
import Search from './views/Search';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/pasttrials"> Past Trials </Link>
            </li>
            <li>
              <Link to="/howitworks"> How It Works </Link>
            </li>
            <li>
              <Link to="/login"> Log In / Sign Up </Link>
            </li>
            <li>
              <Link to="/search"> Search </Link>
            </li>
          </ul>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/pasttrials' component={PastTrials}></Route>
          <Route exact path='/howitworks' component={HowItWorks}></Route>
          <Route exact path='/login' component={LogIn}></Route>
          <Route exact path='/search' component={Search}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
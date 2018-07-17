import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import AppHeader from './AppHeader/AppHeader.js';

import LandingPage from './Pages/landingpage.js'
import About from './Pages/about.js';
import TeamPage from './Pages/teampage.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <ul>
              <li><Link to="/">About</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/teampage">Books</Link></li>
          </ul>

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/about" component={About} />
            <Route path="/teampage" component={TeamPage} />
          </Switch>

        </div>
      </Router>
  
    );
  }
}

export default App;

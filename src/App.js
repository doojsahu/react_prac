
import React from 'react';
import './App.scss';
import {Route, BrowserRouter as Router, Switch, Link, Redirect} from 'react-router-dom'

import Login from './Login'
import Dashboard from './components/Dashboard';

function App() {


  return (
    
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/" >Login</Link>
            </li>
            <li>
              <Link to="/dashboard" >Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

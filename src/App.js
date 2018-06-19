import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';
import EntryPage from './components/EntryPage/EntryPage';
import ProjectPage from './components/ProjectPage/ProjectPage';
import ReportingPage from './components/ReportingPage/ReportingPage';

import './styles/main.css';

const App = () => (
  <div>
    <Header title="Time Tracker" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route 
          path='/projects'
          component={ProjectPage}
        />
        <Route 
          path='/time_entries'
          component={EntryPage}
        />
        <Route 
          path='/reports'
          component={ReportingPage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeAndLogout from '../../components/WelcomeAndLogout/WelcomeAndLogout';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li className="regularLi">
          <Link to="/projects">
            Current Projects
          </Link>
        </li>
        <li className="regularLi">
          <Link to="/time_entries">
            Time Entries
          </Link>
        </li>
        <li className="regularLi">
          <Link to="/reports">
            Project Reports
          </Link>
        </li>
        <li>
          <div id="welcomeLogout">
            <WelcomeAndLogout />
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;

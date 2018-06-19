import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/projects">
            Current Projects
          </Link>
        </li>
        <li>
          <Link to="/time_entries">
            Time Entries
          </Link>
        </li>
        <li>
          <Link to="/reports">
            Project Reports
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;

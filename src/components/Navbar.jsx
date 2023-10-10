// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isTeamsDropdownVisible, setTeamsDropdownVisible] = useState(false);
  const [isEventsDropdownVisible, setEventsDropdownVisible] = useState(false);

  const toggleTeamsDropdown = () => {
    setTeamsDropdownVisible(!isTeamsDropdownVisible);
  };

  const toggleEventsDropdown = () => {
    setEventsDropdownVisible(!isEventsDropdownVisible);
  };

  return (
    <header className="header">
      {/* NSS logo */}
      <a className="nss-logo" href="https://nsscrce.org/">
        <img src="/images/nss-logo.svg" alt="NSS Logo" />
      </a>
      {/* FRCRCE logo */}
      <a className="father-logo">
        <img src="/images/father-logo.svg" alt="Father Logo" />
      </a>
      <a className="crce-logo" href="http://frcrce.ac.in/">
        <img src="/images/crce-logo.svg" alt="CRCE Logo" />
      </a>
      {/* Page title */}
      <div className="nss-title">
        <a href="https://nsscrce.org/"><h1>NSS CRCE</h1></a>
      </div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/vol_data">Vol.Data</Link></li>
        <li className="dropdown">
          <div className="dropdown-button" onClick={toggleTeamsDropdown}>
            <button className={`dropbtn${isTeamsDropdownVisible ? ' active' : ''}`}>
              Teams ▼ {/* Inverted triangle icon */}
            </button>
          </div>
          {isTeamsDropdownVisible && (
            <div className="dropdown-content">
              <Link to="/team_2023_24">Team 2023-24</Link>
            </div>
          )}
        </li>
        <li className="dropdown">
          <div className="dropdown-button" onClick={toggleEventsDropdown}>
            <button className={`dropbtn${isEventsDropdownVisible ? ' active' : ''}`}>
              Events ▼ {/* Inverted triangle icon */}
            </button>
          </div>
          {isEventsDropdownVisible && (
            <div className="dropdown-content">
              <Link to="/events_2023_24">Events 2023-24</Link>
            </div>
          )}
        </li>
        {/* Add more navigation links */}
      </ul>
    </header>
  );
}

export default Navbar;

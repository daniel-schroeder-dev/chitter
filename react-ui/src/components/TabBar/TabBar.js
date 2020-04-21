import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './TabBar.css';

function TabBar(props) {
  return (
    <footer className="tab-bar">
      <NavLink to="/home"><FontAwesomeIcon className="tab-bar__icon" icon={faHome} /></NavLink>
      <NavLink to="/explore"><FontAwesomeIcon className="tab-bar__icon" icon={faSearch} /></NavLink>
      <NavLink to="/notifications"><FontAwesomeIcon className="tab-bar__icon" icon={faBell} /></NavLink>
      <NavLink to="/messages"><FontAwesomeIcon className="tab-bar__icon" icon={faEnvelope} /></NavLink>
    </footer>
  );
}

export default TabBar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faBell, faEnvelope, faBookmark, faClipboard, faStroopwafel } from '@fortawesome/free-solid-svg-icons'

import logo from '../../fixtures/logo.png';
import profilePic from '../../fixtures/profile-pic.jpg';

import './TabBar.css';

function TabBar(props) {

  const username = 'DSchroederDev';

  return (
    <footer className="tab-bar">
      <NavLink className="tab-bar__logo-link" to="/home"><img className="tab-bar__logo" src={logo} alt="logo" /></NavLink>
      <NavLink to="/home"><FontAwesomeIcon className="tab-bar__icon" icon={faHome} /></NavLink>
      <NavLink to="/explore"><FontAwesomeIcon className="tab-bar__icon" icon={faSearch} /></NavLink>
      <NavLink to="/notifications"><FontAwesomeIcon className="tab-bar__icon" icon={faBell} /></NavLink>
      <NavLink to="/messages"><FontAwesomeIcon className="tab-bar__icon" icon={faEnvelope} /></NavLink>
      <NavLink to="/bookmarks" className="hide-sm-screen"><FontAwesomeIcon className="tab-bar__icon hide-sm-screen" icon={faBookmark} /></NavLink>
      <NavLink to={`/${username}/lists`} className="hide-sm-screen"><FontAwesomeIcon className="tab-bar__icon hide-sm-screen" icon={faClipboard} /></NavLink>
      <NavLink to={`/${username}`} className="hide-sm-screen"><img className="tab-bar__user-avatar" src={profilePic} alt="user" /></NavLink>
      <FontAwesomeIcon className="tab-bar__icon hide-sm-screen" icon={faStroopwafel} />

    </footer>
  );
}

export default TabBar;

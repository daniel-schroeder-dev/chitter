import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faBell, faEnvelope, faBookmark, faClipboard, faStroopwafel, faFeatherAlt } from '@fortawesome/free-solid-svg-icons'

import logo from '../../fixtures/logo.png';
import profilePic from '../../fixtures/profile-pic.jpg';

import './TabBar.css';

function TabBar(props) {

  const username = 'DSchroederDev';

  return (
    <footer className="tab-bar">
      <NavLink className="tab-bar__logo-link" to="/home"><img className="tab-bar__logo" src={logo} alt="logo" /></NavLink>
      <NavLink className="tab-bar__nav-link" to="/home"><span className="tab-bar__icon__wrapper"><FontAwesomeIcon className="tab-bar__icon" icon={faHome} /></span><h3 className="tab-bar__nav-link-text hide-m-screen">Home</h3></NavLink>
      <NavLink className="tab-bar__nav-link" to="/explore"><span className="tab-bar__icon__wrapper"><FontAwesomeIcon className="tab-bar__icon" icon={faSearch} /></span><h3 className="tab-bar__nav-link-text hide-m-screen">Explore</h3></NavLink>
      <NavLink className="tab-bar__nav-link" to="/notifications"><span className="tab-bar__icon__wrapper"><FontAwesomeIcon className="tab-bar__icon" icon={faBell} /></span><h3 className="tab-bar__nav-link-text hide-m-screen">Notifications</h3></NavLink>
      <NavLink className="tab-bar__nav-link" to="/messages"><span className="tab-bar__icon__wrapper"><FontAwesomeIcon className="tab-bar__icon" icon={faEnvelope} /></span><h3 className="tab-bar__nav-link-text hide-m-screen">Messages</h3></NavLink>
      <NavLink className="tab-bar__nav-link hide-sm-screen" to="/bookmarks"><span className="tab-bar__icon__wrapper"><FontAwesomeIcon className="tab-bar__icon hide-sm-screen" icon={faBookmark} /></span><h3 className="tab-bar__nav-link-text hide-m-screen">Bookmarks</h3></NavLink>
      <NavLink className="tab-bar__nav-link hide-sm-screen" to={`/${username}/lists`}><span className="tab-bar__icon__wrapper"><FontAwesomeIcon className="tab-bar__icon hide-sm-screen" icon={faClipboard} /></span><h3 className="tab-bar__nav-link-text hide-m-screen">Lists</h3></NavLink>
      <NavLink className="tab-bar__nav-link hide-sm-screen" to={`/${username}`} exact><span className="tab-bar__icon__wrapper"><img className="tab-bar__user-avatar" src={profilePic} alt="user" /></span><h3 className="tab-bar__nav-link-text hide-m-screen">Profile</h3></NavLink>
      <NavLink className="tab-bar__nav-link hide-sm-screen" to={`/${username}/settings`} exact><span className="tab-bar__icon__wrapper"><FontAwesomeIcon className="tab-bar__icon hide-sm-screen" icon={faStroopwafel} /></span><h3 className="tab-bar__nav-link-text hide-m-screen">More</h3></NavLink>
      <NavLink className="tab-bar__nav-link hide-sm-screen" to={`/${username}/squawk`} exact><span className="tab-bar__icon__wrapper"><FontAwesomeIcon className="tab-bar__icon hide-sm-screen" icon={faFeatherAlt} /></span><h3 className="tab-bar__nav-link-text hide-m-screen">Squawk</h3></NavLink>

    </footer>
  );
}

export default TabBar;

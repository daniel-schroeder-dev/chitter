import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './TabBar.css';

function TabBar(props) {
  return (
    <footer className="tab-bar">
      <FontAwesomeIcon className="tab-bar__icon" icon={faHome} />
      <FontAwesomeIcon className="tab-bar__icon" icon={faSearch} />
      <FontAwesomeIcon className="tab-bar__icon" icon={faBell} />
      <FontAwesomeIcon className="tab-bar__icon" icon={faEnvelope} />
    </footer>
  );
}

export default TabBar;

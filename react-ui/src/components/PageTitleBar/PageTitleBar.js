import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import profilePic from '../../fixtures/profile-pic.jpg';

import './PageTitleBar.css';

function PageTitleBar(props) {

  const match = useRouteMatch();

  return (
    <header className="page-title-bar">
      <img className="page-title-bar__user-avatar" src={profilePic} alt="user" />
      {match.params[0]}
    </header>
  );
}

export default PageTitleBar;
